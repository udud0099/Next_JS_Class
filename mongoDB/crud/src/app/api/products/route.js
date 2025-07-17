import { connectionStr } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let product = new Product(payload);
  const result = await product.save();

  return NextResponse.json({ result, success: true });
}
