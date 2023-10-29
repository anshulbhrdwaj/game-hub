import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex w-screen h-10 2xl:h-14  px-[5vw] py-2">
      <img src={logo} alt="Logo" />

      <div id="logo" className="h-full">
      </div>

    </nav>
  );
};

export default Navbar;
