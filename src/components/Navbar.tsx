import { logo, moon, sun } from "../assets";

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const Navbar = ({ toggleTheme, theme }: Props) => {
  return (
    <nav className="flex justify-between items-center w-screen h-10 2xl:h-14 bg-slate-500 dark:bg-[#1e2124] px-[5vw] py-2 fixed z-50">
      <div id="logo" className="h-full justify-start">
        <img src={logo} alt="Logo" className="h-full justify-start"/>
      </div>

      <div id="toggleTheme" className="h-full">
        <button onClick={toggleTheme} className="h-full">
          <img src={theme !== "dark" ? moon : sun} alt="Theme Switch" className="h-full"/>
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
