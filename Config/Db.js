import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Database Connection error', error);
        process.exit(1);
    }
}