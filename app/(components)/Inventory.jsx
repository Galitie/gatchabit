"use client";
import React from "react";
import InventoryTile from "./InventoryTile";

const Inventory = ({ inventory }) => {
  return (
    <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
      {inventory?.map((inventoryTile, inventoryTileIndex) => (
        <div key={inventoryTileIndex}>
          <InventoryTile info={inventoryTile} />
        </div>
      ))}
    </div>
  );
};

export default Inventory;
