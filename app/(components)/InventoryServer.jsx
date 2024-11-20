import React from "react";
import Inventory from "./Inventory";

const getInventoryTiles = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/Users/Inventory",
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log("Failed to get inventoryTiles", error);
  }
};

const InventoryServer = async ({ useData }) => {
  const { inventory } = await getInventoryTiles();
  return (
    <>
      <Inventory inventory={inventory} sharedData={useData} />
    </>
  );
};

export default InventoryServer;
