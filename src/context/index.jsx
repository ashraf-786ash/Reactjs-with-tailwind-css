import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [gameDetailsData, setGameDetailsData] = useState(null);
  const [FavouritesList, setFavouritesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Set loading state to true when fetching starts
    try {
      const res = await fetch(`/api/games?key=50bcbab9045c49d0833e782703952a5a&search=${searchParam}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data); // Log the full response to verify structure
      if (data.results) { // Ensure 'results' is present in the response
        setRecipeList(data.results); // Set only the 'results' part
      } else {
        console.log("No results found in the response.");
        setRecipeList([]); // Set empty list if no results
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false); // Set loading state to false after fetching is complete
      setSearchParam(''); // Reset search param
    }
  }

  function handleAddFavourite(gameDetails) {
    console.log("Added to cart:", gameDetails);
    // Display the game details or handle the addition to the cart
    setFavouritesList([...FavouritesList, gameDetails]);
     // Add the game details to the favorites list
  }

  console.log(loading, recipeList); // Log loading state and recipeList

  return (
    <GlobalContext.Provider 
      value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, gameDetailsData, setGameDetailsData, handleAddFavourite, FavouritesList }}>
      {children}
    </GlobalContext.Provider>
  );
}
