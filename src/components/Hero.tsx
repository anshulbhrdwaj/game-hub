import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Hero = ({children}: Props) => {
  return (
    <main className="flex bg-slate-200 dark:bg-[#424549] w-full min-h-screen mt-10 2xl:mt-14 md:ml-[20vw] xl:ml-[15vw]">
      {children}
    </main>
  );
};

export default Hero;
