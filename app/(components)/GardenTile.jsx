"use client";
import { useData } from "./DataContext";
import { useRouter } from "next/navigation";

const GardenTile = ({ info }) => {
  //Check if gardenTile HAS an item on it
  const item = info.item[0] != undefined ? info.item[0] : null;
  const { data, setData } = useData();
  const router = useRouter();

  const sendData = () => {
    try {
      // if item is selected and garden tile doesn't have item on it already
      if (data.selectedItem && !item) {
        addItemToTile(data.selectedItem._id, info._id);
        deleteItem(data.selectedItem._id);
        setData(null);
        router.refresh();
      } else if (data.selectedItem && item) {
        // if item is selected and garden tile has an item on it
        changeItemInTile(info._id, data.selectedItem._id);
        changeItemInInventory(data.selectedItem._id, item._id);
        setData(null);
        router.refresh();
        // if item is not selected, select this tile
      } else {
        setData({ selectedTile: info._id, item: item });
      }
    } catch (error) {
      console.log(
        "User is selecting a garden tile before selecting an inventory item.",
        error
      );
    }
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
      if (response.ok) {
        router.refresh();
      }
      console.log("Updated GardenTile:", data.gardenTile);
    } catch (error) {
      console.error(error.message);
    }
  };

  const changeItemInInventory = async (oldItemId, newItemId) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_HOST_URL + "/api/Users/Inventory",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ oldItemId, newItemId }),
        }
      );
      if (!response.ok) throw new Error("Failed to change item");
      const data = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  };

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
          onClick={sendData}
        ></img>
      ) : (
        <div
          onClick={sendData}
          className="bg-gray-400 aspect-square hover:border-green-300 absolute"
        ></div>
      )}

      {/* Render middle layer */}
      {info.middleLayerURL != "" ? (
        <img
          className="absolute"
          src={info.middleLayerURL}
          alt="Middle Layer"
          width="100%"
          height="100%"
          onClick={sendData}
        ></img>
      ) : null}

      {/* Render top item layer */}
      {item != null ? (
        <img
          className="absolute"
          src={item.image}
          width="100%"
          height="100%"
          onClick={sendData}
        ></img>
      ) : null}
    </div>
  );
};

export default GardenTile;
