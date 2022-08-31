import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <img className="h-20 w-20 rounded-full" src="/emori.jpeg" alt="emori" />
        <div>
          <h1 className="text-lg text-white font-bold">The Curiosity Draw</h1>
          <p className="text-sm text-emerald-500 truncate">User...</p>
        </div>
      </div>

      <div className="hidden  md:flex  items-center justify-center rounded-md md:col-span-3">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>

      <div>
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
