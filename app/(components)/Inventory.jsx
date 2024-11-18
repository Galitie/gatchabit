"use client";
import React from "react";
import InventoryTile from "./InventoryTile";

const Inventory = ({ inventory }) => {
  // Create a combined array of inventory items and placeholders
  const gridItems = [
    ...inventory,
    ...Array.from({ length: Math.max(25 - (inventory?.length || 0), 0) }), // Fill remaining slots
  ];

  return (
    <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
      {gridItems.map((inventoryTile, inventoryTileIndex) => (
        <div key={inventoryTileIndex}>
          {inventoryTile ? (
            <InventoryTile info={inventoryTile} /> // Pass only valid inventory items
          ) : (
            <div className="bg-gray-200 aspect-square relative"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Inventory;
