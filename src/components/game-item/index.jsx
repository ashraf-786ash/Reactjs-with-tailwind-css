import { Link } from 'react-router-dom';

export default function GameItem({ item }) {
  console.log(item);
  return (
    <div className="flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-normal overflow-hidden items-center rounded-xl">
        <img
          src={item?.background_image || "default-image-url.jpg"} // Use the background_image property
          alt={item?.name || "Game item"}
          className="block w-full h-full object-cover" // Ensure the image covers the div
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.name}
        </h3>
        <Link
          to={`/game-item/${item?.id}`} // Use the Link component for client-side navigation
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Download
        </Link>
      </div>
    </div>
  );
}
