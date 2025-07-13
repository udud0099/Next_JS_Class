import { NextResponse } from "next/server";
// import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import connectDB from "../../../../lib/mongodb";

// Define a Mongoose schema and model here
const InfoSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Important: Avoid redefining the model when hot reloading
const Info = mongoose.models.Info || mongoose.model("Info", InfoSchema);

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    console.log("Received data:", body); // <-- Add this

    const { name, age } = body;

    const newInfo = new Info({ name, age });
    await newInfo.save();

    return NextResponse.json({ success: true, data: newInfo });
  } catch (error) {
    console.error("Error saving data:", error); // <-- Add this
    return NextResponse.json({ success: false, error: String(error) });
  }
}
