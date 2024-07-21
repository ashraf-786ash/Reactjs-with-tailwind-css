import { useContext } from "react";
import { GlobalContext } from "../../context";
import GameItem from "../../components/game-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <div>Loading..please wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <GameItem key={item.id} item={item} />)
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
