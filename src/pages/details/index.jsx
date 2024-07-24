import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context';

export default function Details() {
  const { id } = useParams(); // Extract `id` from URL parameters
  const { gameDetailsData, setGameDetailsData, handleAddFavourite } = useContext(GlobalContext);

  useEffect(() => {
    async function getGameDetails() {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=50bcbab9045c49d0833e782703952a5a`);
        const data = await response.json();
        console.log(data);

        // Update context with the fetched game details
        if (data) {
          setGameDetailsData(data); // Update context with the fetched data
        }
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    }

    getGameDetails();
  }, [id, setGameDetailsData]); // Re-run effect when `id` or `setGameDetailsData` changes

  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
          <img
            src={gameDetailsData?.background_image || "default-image-url.jpg"} // Fallback image
            alt={gameDetailsData?.name || "Game Item"}
            className='w-full h-full object-cover block group-hover:scale-105 duration-300'
          />
        </div>
        {gameDetailsData?.website && (
          <button
            onClick={() => window.open(gameDetailsData.website, '_blank')}
            className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'
          >
            Buy at Game Store
          </button>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-2xl truncate text-black'>{gameDetailsData?.name}</h3>
        <div>
          <button onClick={() => handleAddFavourite(gameDetailsData)} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
