"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { faCoins, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GachaCoinSlot = ({ item, user }) => {
  const router = useRouter();
  const [itemRecieved, setItemRecieved] = useState(false);

  const handleClick = (event) => {
    const buttonName = event.target.name;
    if (buttonName === "spendToken") {
      setItemRecieved(true);
      spendToken();
    } else {
      router.push("/");
    }
  };

  const spendToken = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Users/", {
      method: "PATCH",
      body: JSON.stringify({ amount: 1 }),
    });
    if (res.ok) {
      router.refresh(); // Refresh server components, including Tokens in Nav
    }
  };

  return (
    <>
      {user.tokens > 0 ? (
        <button className="btn" onClick={handleClick} name="spendToken">
          Insert Coin{" "}
          <FontAwesomeIcon icon={faCoins} className="text-yellow-400 pt-1" /> 1
        </button>
      ) : (
        <>
          <p>You have no tokens! Complete tasks to earn more tokens.</p>
          <button className="btn" onClick={handleClick} name="return">
            Return to Garden{" "}
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-green-400 pt-1"
            />
          </button>
        </>
      )}

      {itemRecieved
        ? item.map((itemDetails, itemIndex) => (
            <div key={itemIndex}>
              <p>{itemDetails.title}</p>
              <p>{itemDetails.description}</p>
              <p>{itemDetails.rarity}</p>
              <img src={itemDetails.image}></img>
            </div>
          ))
        : ""}
    </>
  );
};

export default GachaCoinSlot;
