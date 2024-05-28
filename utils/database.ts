import mongoose from "mongoose";

let isConnected: boolean = false;

// Ensure the environment variable is defined
const MONGODB_URI: string = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export async function connectDatabase() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}
