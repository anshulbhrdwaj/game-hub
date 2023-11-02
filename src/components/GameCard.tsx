import React from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="h-auto max-w-full rounded-lg bg-slate-500 border border-gray-200 shadow  dark:bg-[#2c2f33] dark:border-gray-700">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src={game.background_image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {game.name}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default GameCard;
