import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
});

export const MyProduct =
  mongoose.models.myproducts || mongoose.model("myproducts", productModel);
