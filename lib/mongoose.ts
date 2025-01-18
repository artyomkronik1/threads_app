import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    console.log(process.env.MONGODB_URL);
    if(!process.env.MONGODB_URL) return console.log("MongoDB URI is missing");
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("MongoDB URI is connected");
    }catch(err) {
        console.log("MongoDB URI is not conected");
    }
}