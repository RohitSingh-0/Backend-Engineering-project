import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_URI as string
    );

    console.log("database connected");
};