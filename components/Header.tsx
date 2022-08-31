import React from "react";
import NavButton from "./NavButton";

function Header() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img className="h-20 w-20 rounded-full" src="/emori.jpeg" alt="emori" />
        <div>
          <h1 className="text-lg text-white font-bold">The Curiosity Draw</h1>
          <p className="text-sm text-emerald-500 truncate">User...</p>
        </div>
      </div>

      <div>
        <div className="bg-[#0A1F1C]">
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>
    </div>
  );
}

export default Header;
