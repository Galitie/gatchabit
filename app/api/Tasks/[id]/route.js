import Task from "@/app/(models)/task";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
