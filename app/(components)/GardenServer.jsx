import React from "react";
import Garden from "./Garden";

const getGardenTiles = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/GardenTiles",
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log("Failed to get gardenTiles", error);
  }
};

const GardenServer = async ({ useData }) => {
  const { gardenTiles } = await getGardenTiles();

  return (
    <>
      <Garden gardenTiles={gardenTiles} sharedData={useData} />
    </>
  );
};

export default GardenServer;
