import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div>
        {error && <p>{error}</p>}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-[3vw]">
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {data?.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
