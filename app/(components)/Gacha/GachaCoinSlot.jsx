"use client";
import React, { useState } from "react";

const GachaCoinSlot = ({ item }) => {
  const [itemRecieved, setItemRecieved] = useState(false);

  const handleClick = () => {
    console.log(item);
    setItemRecieved(true);
  };

  return (
    <>
      <button className="btn" onClick={handleClick}>
        Insert Coin
      </button>
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
