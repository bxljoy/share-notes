import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectDatabase() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}
