"use client";
import React from "react";
import { useData } from "./DataContext";

const InventoryTile = ({ info }) => {
  const { setData } = useData();

  const sendData = () => {
    console.log(info);
    setData({ selectedItem: info });
  };

  return (
    <>
      <div className="bg-gray-400 aspect-square hover:border-2 hover:border-green-300 relative">
        {info.image != null ? (
          <img
            className="absolute"
            src={info.image}
            alt="Item texture"
            width="100%"
            height="100%"
            onClick={sendData}
          ></img>
        ) : null}
      </div>
    </>
  );
};

export default InventoryTile;
