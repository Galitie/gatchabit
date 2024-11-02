import User from "@/app/(models)/user";
import { NextResponse } from "next/server";

// Get the first user
export async function GET() {
  try {
    const user = await User.findOne();
    return NextResponse.json(
      { user: user, tokens: user.tokens, username: user.username },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Add tokens to the first user
export async function POST(request) {
  try {
    const { amount } = await request.json();
    if (!amount || amount < 0) {
      return NextResponse.json({ message: "Invalid amount" }, { status: 400 });
    }

    const user = await User.findOne();
    user.tokens += amount;
    await user.save();

    return NextResponse.json(
      { message: "Tokens added successfully", tokens: user.tokens },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Remove tokens from the first user
export async function PATCH(request) {
  try {
    const { amount } = await request.json();
    if (!amount || amount < 0) {
      return NextResponse.json({ message: "Invalid amount" }, { status: 400 });
    }

    const user = await User.findOne();
    user.tokens = Math.max(0, user.tokens - amount); // Prevent negative tokens
    await user.save();

    return NextResponse.json(
      { message: "Tokens removed successfully", tokens: user.tokens },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
