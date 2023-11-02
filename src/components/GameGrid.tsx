import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-[3vw]">
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/> )}
        {games.map((game) => (
          <GameCard game={game} key={game.id}/>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
