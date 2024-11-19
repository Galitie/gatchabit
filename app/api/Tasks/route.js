import Task from "@/app/(models)/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const taskData = body.formData;

    // Ensure taskData has a timestamp field, like `createdAt`.
    await Task.create({ ...taskData, createdAt: new Date() });

    return NextResponse.json({ message: "Task created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch tasks and sort them by createdAt in descending order
    const tasks = await Task.find().sort({ createdAt: -1 });

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
