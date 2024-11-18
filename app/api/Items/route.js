import Item from "@/app/(models)/items";
import { NextResponse } from "next/server";

// Get random item from database
export async function GET() {
  try {
    const item = await Item.aggregate([{ $sample: { size: 1 } }]);
    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
