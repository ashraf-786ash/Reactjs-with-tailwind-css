import GameItem from "../../components/game-item";
import { useContext } from "react";
import { GlobalContext } from "../../context";
export default function Favourites(){
    const { FavouritesList} = useContext(GlobalContext);
    
    return (
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {FavouritesList && FavouritesList.length > 0 ? (
          FavouritesList.map((item) => <GameItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show.Please try something else....
            </p>
          </div>
        )}
      </div>
    );
}