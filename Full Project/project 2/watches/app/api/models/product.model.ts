import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
  }

  // { timestamps: true }
);

const Product =
  mongoose.models.watchproducts ||
  mongoose.model("watchproducts", productSchema);

export default Product;
