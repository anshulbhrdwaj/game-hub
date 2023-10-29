import { Hero, Navbar, Sidebar } from "./components";
import Theme from "./components/Theme";

function App() {
  const { theme, handleThemeSwitch } = Theme();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar toggleTheme={handleThemeSwitch} theme={theme} />

      <div className="flex">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
