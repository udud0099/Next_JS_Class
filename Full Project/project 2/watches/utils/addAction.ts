"use server";

import { connectDB } from "@/app/api/db/connectDB";
import { error } from "console";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function addAction(formData: FormData) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name");
    const price = formData.get("price");
    const link = formData.get("link");
    const description = formData.get("description");

    if (!image || !name || !price || !link || !description) {
      console.log("all fild req");

      return {
        error: "all field req",
      };
    }
    await connectDB();

    // image processes

    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "watches",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });
    console.log("image response: ", imageResponse);

    // store in db
    await Product.create({
      image: imageResponse.secure_url,
      name,
      price,
      link,
      description,
    });
    return {
      success: "Product adder succesfully",
    };
  } catch (error) {
    return {
      error: "some thing wrong",
    };
  }
}
