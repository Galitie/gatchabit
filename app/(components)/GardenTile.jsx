import React from "react";

const GardenTile = ({ info }) => {
  //Check if gardenTile HAS an item on it
  const item = info.item[0] != undefined ? info.item[0] : null;

  const addItemToTile = async (itemId, gardenTileId) => {
    try {
      const response = await fetch("/api/GardenTiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gardenTileId: gardenTileId, // Replace with variable
          itemId: itemId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add item:", errorData.message);
        return;
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  return (
    <div className="bg-gray-400 aspect-square hover:border-2 hover:border-green-300 relative">
      {/* Render bottom layer */}
      {info.backgroundURL != "" ? (
        <img
          className="absolute"
          src={info.backgroundURL}
          alt="Floor texture"
          width="100%"
          height="100%"
        ></img>
      ) : (
        <div className="bg-gray-400 aspect-square hover:border-green-300 absolute"></div>
      )}

      {/* Render middle layer */}
      {info.middleLayerURL != "" ? (
        <img
          className="absolute"
          src={info.middleLayerURL}
          alt="Middle Layer"
          width="100%"
          height="100%"
        ></img>
      ) : null}

      {/* Render top item layer */}
      {item != null ? (
        <img
          className="absolute"
          src={item.image}
          width="100%"
          height="100%"
        ></img>
      ) : null}
    </div>
  );
};

export default GardenTile;
