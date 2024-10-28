import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <p>GATCHABIT</p>
      </div>
      <button className="flex gap-2 btn">
        <FontAwesomeIcon
          icon={faCoins}
          className="text-yellow-400 pt-1"
        ></FontAwesomeIcon>
        <p>Use Tokens:</p>
        <p>x10</p>
      </button>
    </nav>
  );
};

export default Nav;
