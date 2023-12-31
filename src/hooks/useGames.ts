import { GameQuery } from "../App";
import useData from "./useData";

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
  rating_top: number;
}

const useGame = (gameQurey: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQurey.genre?.id,
        platforms: gameQurey.platform?.id,
        ordering: gameQurey.sortOrder,
        search: gameQurey.searchText
      },
    },
    [gameQurey]
  );

export default useGame;
