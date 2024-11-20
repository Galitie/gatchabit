"use client";
import React, { useState } from "react";
import InventoryTile from "./InventoryTile";

const Inventory = ({ inventory }) => {
  const [openInventory, setOpenInventory] = useState(false);

  const toggleInventory = () => {
    setOpenInventory((prevState) => !prevState);
  };

  // Create a combined array of inventory items and placeholders
  const gridItems = [
    ...inventory,
    ...Array.from({ length: Math.max(25 - (inventory?.length || 0), 0) }), // Fill remaining slots
  ];

  const InventoryGrid = ({ gridItems }) => (
    <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
      {gridItems.map((inventoryTile, index) => (
        <div key={index}>
          {inventoryTile ? (
            <InventoryTile info={inventoryTile} />
          ) : (
            <div className="bg-gray-200 aspect-square relative"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {openInventory ? (
        inventory.length > 0 ? (
          <>
            <button className="btn" onClick={toggleInventory}>
              Close Inventory
            </button>
            <InventoryGrid gridItems={gridItems} />
          </>
        ) : (
          <p>
            You have no items in your inventory! Use your tokens to get new
            items.
          </p>
        )
      ) : (
        <button className="btn" onClick={toggleInventory}>
          Open Inventory
        </button>
      )}
    </>
  );
};

export default Inventory;
