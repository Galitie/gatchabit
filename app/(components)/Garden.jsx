"use client";
import React from "react";
import GardenTile from "./GardenTile";
import { useState } from "react";

const Garden = ({ gardenTiles }) => {
  return (
    <>
      <div className="grid grid-cols-5 cursor-pointer aspect-square m-auto max-w-xs min-w-full">
        {gardenTiles.map((gardenTile, gardenTileIndex) => (
          <div key={gardenTileIndex}>
            <GardenTile info={gardenTile} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Garden;
