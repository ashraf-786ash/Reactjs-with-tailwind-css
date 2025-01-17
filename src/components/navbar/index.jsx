import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
export default function Navbar() {
  const {searchParam, setSearchParam, handleSubmit}= useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
      <h2 className="text-2xl font-semibold">
        
        <NavLink to={"/"}>GAMEZONE</NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
          placeholder="Search for a game..."
          className="bg-white-500/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-white-900 focus:shadow-black-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"} className="text-gray-500 hover:text-yellow-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"} className="text-gray-500 hover:text-yellow-500">
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
