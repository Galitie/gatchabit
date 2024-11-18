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

// Remove an item from the user's inventory
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

    // Check if the item exists in the inventory
    if (!user.inventory.includes(itemId)) {
      return NextResponse.json(
        { message: "Item not found in inventory" },
        { status: 404 }
      );
    }

    // Remove the item from the inventory
    user.inventory = user.inventory.filter((id) => id.toString() !== itemId);
    await user.save();

    return NextResponse.json(
      { message: "Item removed from inventory", inventory: user.inventory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
