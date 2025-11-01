import mongoose from "mongoose";
import { ENV } from "./env.config";


const connectDatabase = async() => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Database Connected!!!!!")
    } catch (error)
     {
        console.error("Database connection error:  ",error);
        process.exit(1);
    }
}

export default connectDatabase;