const addItemToTile = async (itemId, gardenTileId) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/GardenTiles",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gardenTileId: gardenTileId, // Replace with variable
          itemId: itemId,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to add item:", errorData.message);
      return;
    }
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

const removeItemFromTile = async (gardenTileId, itemId) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/GardenTiles",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gardenTileId, itemId }),
      }
    );
    if (!response.ok) throw new Error("Failed to remove item");
    const data = await response.json();
    console.log("Updated GardenTile:", data.gardenTile);
  } catch (error) {
    console.error(error.message);
  }
};

  const changeItemInTile = async (gardenTileId, newItemId) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_HOST_URL + "/api/GardenTiles",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gardenTileId, newItemId }),
        }
      );
      if (!response.ok) throw new Error("Failed to change item");
      const data = await response.json();
      console.log("Updated GardenTile:", data.gardenTile);
    } catch (error) {
      console.error(error.message);
    }
  };