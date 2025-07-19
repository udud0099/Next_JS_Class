import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("mongo" + conn.connection.host);
  } catch (error: any) {
    console.log("error connctiong to mongoDB", error.message);
    process.exit(1);
  }
};
