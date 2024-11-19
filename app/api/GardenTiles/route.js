import GardenTile from "@/app/(models)/gardenTile";
import { NextResponse } from "next/server";

// Get all gardenTiles in DB
export async function GET() {
  try {
    // Fetch garden tiles and populate the referenced items
    const gardenTiles = await GardenTile.find().populate("item");
    return NextResponse.json({ gardenTiles }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Add item to garden tile
export async function POST(req) {
  try {
    const { gardenTileId, itemId } = await req.json();

    // Find the GardenTile and add the item to its item array
    const updatedGardenTile = await GardenTile.findByIdAndUpdate(
      gardenTileId,
      { $addToSet: { item: itemId } }, // $addToSet prevents duplicate entries
      { new: true } // Return the updated document
    ).populate("item");

    if (!updatedGardenTile) {
      return NextResponse.json(
        { message: "GardenTile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { gardenTile: updatedGardenTile },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding item", error },
      { status: 500 }
    );
  }
}

// Delete item from garden tile
export async function DELETE(req) {
  try {
    const { gardenTileId, itemId } = await req.json();

    // Find the GardenTile and remove the item from its item array
    const updatedGardenTile = await GardenTile.findByIdAndUpdate(
      gardenTileId,
      { $pull: { item: itemId } }, // $pull removes matching entries from the array
      { new: true } // Return the updated document
    ).populate("item");

    if (!updatedGardenTile) {
      return NextResponse.json(
        { message: "GardenTile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { gardenTile: updatedGardenTile },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error removing item", error },
      { status: 500 }
    );
  }
}

// Swap out item on tile if it already exists
export async function PATCH(req) {
  try {
    const { gardenTileId, newItemId } = await req.json();

    // Find the GardenTile and update the item field
    const updatedGardenTile = await GardenTile.findByIdAndUpdate(
      gardenTileId,
      { item: [newItemId] }, // Replace the item array with the new item
      { new: true } // Return the updated document
    ).populate("item"); // Populate to return the full item details

    if (!updatedGardenTile) {
      return NextResponse.json(
        { message: "GardenTile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { gardenTile: updatedGardenTile },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error swapping item", error },
      { status: 500 }
    );
  }
}
