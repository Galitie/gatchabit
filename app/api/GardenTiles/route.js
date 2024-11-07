import GardenTile from "@/app/(models)/gardenTile";
import { NextResponse } from "next/server";

// Get all gardenTiles in DB
export async function GET() {
  try {
    const gardenTiles = await GardenTile.find();
    return NextResponse.json({ gardenTiles }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
