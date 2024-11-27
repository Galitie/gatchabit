import User from "@/app/(models)/user";
import Item from "@/app/(models)/item";
import { NextResponse } from "next/server";

// Get the user's entire inventory
export async function GET() {
  try {
    // Find the first user and populate their inventory with item details
    const user = await User.findOne().populate("inventory");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ inventory: user.inventory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Add an item to the user's inventory
export async function PUT(request) {
  try {
    const { itemId } = await request.json();
    if (!itemId) {
      return NextResponse.json(
        { message: "Item ID is required" },
        { status: 400 }
      );
    }

    const item = await Item.findById(itemId);
    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    const user = await User.findOne();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Add the item to the user's inventory
    user.inventory.push(itemId);
    await user.save();

    return NextResponse.json(
      { message: "Item added to inventory", inventory: user.inventory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { itemId } = await request.json();

    if (!itemId) {
      return NextResponse.json(
        { message: "Item ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Find the index of the first occurrence of the item
    const itemIndex = user.inventory.findIndex(
      (id) => id.toString() === itemId
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        { message: "Item not found in inventory" },
        { status: 404 }
      );
    }

    // Remove the first occurrence of the item
    user.inventory.splice(itemIndex, 1);
    await user.save();

    return NextResponse.json(
      { message: "Item removed from inventory", inventory: user.inventory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

// Replace an item in the user's inventory
export async function PATCH(request) {
  try {
    const { oldItemId, newItemId } = await request.json();
    console.log("hello", oldItemId, newItemId);
    // Validate input
    if (!oldItemId || !newItemId) {
      return NextResponse.json(
        { message: "Both oldItemId and newItemId are required" },
        { status: 400 }
      );
    }

    // Validate new item exists
    const newItem = await Item.findById(newItemId);
    console.log(newItem, "new item?");
    if (!newItem) {
      return NextResponse.json(
        { message: "New item not found" },
        { status: 404 }
      );
    }

    // Find the user
    const user = await User.findOne();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Find the index of the item to be replaced
    const itemIndex = user.inventory.findIndex(
      (id) => id.toString() === oldItemId
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        { message: "Old item not found in inventory" },
        { status: 404 }
      );
    }

    // Replace the old item with the new item
    user.inventory[itemIndex] = newItemId;
    await user.save();

    return NextResponse.json(
      {
        message: "Item replaced successfully",
        inventory: user.inventory,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
