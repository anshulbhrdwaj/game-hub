import { ReactNode } from "react";
import GenreList from "./GenreList";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  return (
    <div
      id="sidebar"
      className="hidden md:flex bg-slate-400 dark:bg-[#2c2f33] md:w-[20vw] xl:w-[15vw] h-screen fixed mt-10 2xl:mt-14 z-40"
    >
      <div className="relative flex flex-col ">
        <h4 className="flex justify-start text-4xl lg:text-5xl m-3 font-bold tracking-tight text-white">
          Genres
        </h4>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
