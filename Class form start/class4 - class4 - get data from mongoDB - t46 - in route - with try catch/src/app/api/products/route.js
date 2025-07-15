import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // console.log(data);

  let data = [];
  try {
    await mongoose.connect(connectionSrt);

    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}
