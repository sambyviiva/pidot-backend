import mongoose from "mongoose";

export async function connectDb(dbUrl?: string) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    if(!dbUrl) {
      throw new Error("No mongo db url provided")
    }

    await mongoose.connect(dbUrl);
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}
