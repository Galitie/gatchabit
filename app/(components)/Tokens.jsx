import React from "react";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getUser = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Users", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get user", error);
  }
};

const Tokens = async () => {
  const user = await getUser();

  return (
    <div>
      <button className="flex gap-2 btn">
        <FontAwesomeIcon
          icon={faCoins}
          className="text-yellow-400 pt-1"
        ></FontAwesomeIcon>
        <p>Use Tokens: {user.tokens}</p>
      </button>
    </div>
  );
};

export default Tokens;
