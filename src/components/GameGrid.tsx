import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-[3vw]">
        {games.map((game) => (
          <GameCard game={game} key={game.id}/>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
