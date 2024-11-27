"use client";
import React, { useState } from "react";
import InventoryTile from "./InventoryTile";
import { useData } from "./DataContext";
import { useRouter } from "next/navigation";

const Inventory = ({ inventory }) => {
  const router = useRouter();
  const { data, setData } = useData();
  const [openInventory, setOpenInventory] = useState(false);

  const toggleInventory = () => {
    setOpenInventory((prevState) => !prevState);
  };

  // Create a combined array of inventory items and placeholders
  const gridItems = [
    ...inventory,
    ...Array.from({ length: Math.max(25 - (inventory?.length || 0), 0) }), // Fill remaining slots
  ];

  const InventoryGrid = ({ gridItems, useData }) => (
    <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
      {gridItems.map((inventoryTile, index) => (
        <div key={index}>
          {inventoryTile ? (
            <InventoryTile info={inventoryTile} sharedData={useData} />
          ) : (
            <div className="bg-gray-200 aspect-square relative"></div>
          )}
        </div>
      ))}
    </div>
  );

  const handleDeleteItem = () => {
    deleteItem(data.selectedItem._id);
    setData(null);
    router.refresh();
  };

  const deleteItem = async (itemId) => {
    const resTask = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/Users/Inventory",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      }
    );

    if (resTask.ok) {
      router.refresh();
    }
  };

  return (
    <>
      {openInventory ? (
        inventory.length > 0 ? (
          <>
            <div className="flex justify-between">
              <button className="btn" onClick={toggleInventory}>
                Close Inventory
              </button>
              <button className="btn" onClick={handleDeleteItem}>
                Delete Item
              </button>
            </div>
            <InventoryGrid gridItems={gridItems} />
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <button className="btn" onClick={toggleInventory}>
                Close Inventory
              </button>
              <button className="btn" onClick={deleteItem}>
                Delete Item
              </button>
            </div>
            <p>
              You have no items in your inventory! Use your tokens to get new
              items.
            </p>
          </>
        )
      ) : (
        <>
          <div className="flex justify-between">
            <button className="btn" onClick={toggleInventory}>
              Open Inventory
            </button>
            <button className="btn" onClick={deleteItem}>
              Delete Item
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Inventory;
