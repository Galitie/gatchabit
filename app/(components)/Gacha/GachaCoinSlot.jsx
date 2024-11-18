"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const GachaCoinSlot = ({ item, user }) => {
  const router = useRouter();
  const [itemRecieved, setItemRecieved] = useState(false);

  const handleClick = () => {
    setItemRecieved(true);
    spendToken();
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
        <button className="btn" onClick={handleClick}>
          Insert Coin
        </button>
      ) : (
        ""
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
