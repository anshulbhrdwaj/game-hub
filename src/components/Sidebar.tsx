import GenreList from "./GenreList";


const Sidebar = () => {

  
  return (
    <div
      id="sidebar"
      className="hidden md:flex bg-slate-400 dark:bg-[#2c2f33] md:w-[20vw] xl:w-[15vw] h-screen fixed mt-10 2xl:mt-14 z-40"
    >
      <GenreList />
    </div>
  );
};

export default Sidebar;
