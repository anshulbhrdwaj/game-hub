import { useState } from "react";
import { Hero, Navbar, Sidebar } from "./components";
import Theme from "./components/Theme";
import { Genres } from "./hooks/useGenre";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const { theme, handleThemeSwitch } = Theme();

  return (
    <div className="w-screen min-h-screen text-white">
      <Navbar toggleTheme={handleThemeSwitch} theme={theme} />

      <div className="flex min-h-screen w-screen ">
        <Sidebar>
          <GenreList onSelectGenre={setSelectedGenre} />
        </Sidebar>
        <Hero>
          <div className=" mx-[3vw] my-[4vh] w-44">
            <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform?.name}/> 
          </div>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </Hero>
      </div>
    </div>
  );
}

export default App;
