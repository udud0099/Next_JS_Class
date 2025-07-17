import { connectionSrt } from "@/lib/db";
import { MyProduct } from "@/lib/model/myproduct";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // console.log(data);

  let data = [];
  try {
    await mongoose.connect(connectionSrt);

    data = await MyProduct.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}
