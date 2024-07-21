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
        <div className="text-center mt-2">
          <p className="text-lg font-semibold">{item?.name}</p> {/* Display the game name */}
        </div>
      </div>
    );
  }