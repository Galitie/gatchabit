import React from "react";
import ServerTokens from "./ServerTokens";
import Tokens from "./Tokens";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between pt-4">
      <div className="text-xl">
        <p>GATCHABIT</p>
      </div>
      <ServerTokens>
        <Tokens />
      </ServerTokens>
    </nav>
  );
};

export default Nav;
