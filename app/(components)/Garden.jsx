"use client";
import React from "react";
import GardenTile from "./GardenTile";
import { useState } from "react";

const Garden = ({ gardenTiles, children }) => {
  const [inventoryOpen, setInventoryOpen] = useState(false);

  const openInventory = () => {
    setInventoryOpen(true);
  };

  const closeInventory = () => {
    setInventoryOpen(false);
  };

  return (
    <>
      <button onClick={openInventory}>
        <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
          {gardenTiles.map((gardenTile, gardenTileIndex) => (
            <div key={gardenTileIndex}>
              <GardenTile info={gardenTile} />
            </div>
          ))}
        </div>
      </button>
      {inventoryOpen ? (
        <>
          <button className="btn" onClick={closeInventory}>
            Close Inventory
          </button>
          {children}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Garden;
