import React from "react";
import GardenTile from "./GardenTile";

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

const Garden = async () => {
  const { gardenTiles } = await getGardenTiles();

  return (
    <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
      {gardenTiles.map((gardenTile, gardenTileIndex) => (
        <div key={gardenTileIndex}>
          <GardenTile info={gardenTile} />
        </div>
      ))}
    </div>
  );
};

export default Garden;
