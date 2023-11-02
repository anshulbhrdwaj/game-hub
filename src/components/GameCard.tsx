import { Game } from "../hooks/useGames";
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
            src={game.background_image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
              {game.name}
            </h5>
          </a>
          <div className="w-full flex justify-between items-center ">
            <div className="flex gap-2 justify-center items-center">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            </div>
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
