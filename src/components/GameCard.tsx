import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="h-auto max-w-full rounded-lg bg-slate-500 shadow dark:bg-[#2c2f33]">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
          />
        </a>
        <div className="p-5">
          <div className="w-full flex justify-between items-center flex-wrap gap-2 mb-2">
            <div className="flex gap-1 justify-center items-center">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            </div>
            <CriticScore score={game.metacritic} />
          </div>
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-white">
              {game.name}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default GameCard;
