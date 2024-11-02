import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tokens from "./Tokens";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl">
        <p>GATCHABIT</p>
      </div>
      <Tokens />
    </nav>
  );
};

export default Nav;
