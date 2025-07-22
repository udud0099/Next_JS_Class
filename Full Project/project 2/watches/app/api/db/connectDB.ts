import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://udud0099:udud0099@cluster0.p3jghem.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0" as string
    );
    console.log("mongo---1" + conn.connection.host);
  } catch (error: any) {
    console.log("error connctiong to mongoDB", error.message);
    process.exit(1);
  }
};
