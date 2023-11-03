import { useState } from "react";
import { Hero, Navbar, Sidebar } from "./components";
import Theme from "./components/Theme";
import { Genres } from "./hooks/useGenre";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const { theme, handleThemeSwitch } = Theme();

  return (
    <div className="w-screen min-h-screen">
      <Navbar toggleTheme={handleThemeSwitch} theme={theme} />

      <div className="flex min-h-screen w-screen ">
        <Sidebar >
          <GenreList onSelectGenre={setSelectedGenre} />
        </Sidebar>
        <Hero>
          <GameGrid selectedGenre={selectedGenre} />
        </Hero>
      </div>
    </div>
  );
}

export default App;
