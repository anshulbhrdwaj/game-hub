import { useState } from "react";
import { Hero, Navbar, Sidebar } from "./components";
import Theme from "./components/Theme";
import { Genres } from "./hooks/useGenre";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [searchedGame, setSearchedGame] = useState();
  const { theme, handleThemeSwitch } = Theme();

  return (
    <div className="w-screen min-h-screen text-white">
      <Navbar toggleTheme={handleThemeSwitch} theme={theme}>
        <SearchInput />
      </Navbar>

      <div className="flex min-h-screen w-screen ">
        <Sidebar>
          <GenreList
            selectedGenre={gameQuery}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Sidebar>
        <Hero>
          <div className=" mx-[3vw] my-[4vh] flex gap-3">
            <div className="flex-col">
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform?.name}
              />
            </div>
            <div className="flex-col">
              <SortSelector
                selectedOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
          </div>

          <GameGrid gameQuery={gameQuery} />
        </Hero>
      </div>
    </div>
  );
}

export default App;
