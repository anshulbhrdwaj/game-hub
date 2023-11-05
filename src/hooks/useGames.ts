import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (
  gameQurey: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQurey.genre?.id, platforms: gameQurey.platform?.id } },
    [gameQurey]
  );

export default useGame;
