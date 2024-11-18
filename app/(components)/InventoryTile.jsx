import React from "react";

const InventoryTile = ({ info }) => {
  if (!info) return null;
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
          ></img>
        ) : null}
      </div>
    </>
  );
};

export default InventoryTile;
