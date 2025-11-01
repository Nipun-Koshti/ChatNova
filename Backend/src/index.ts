import  express  from "express";
import "dotenv/config"
import cookieParser from "cookie-parser";
import cors from "cors"
import {ENV }from "./config/env.config"
import { errorHandler } from "./middlewares/errorHandler.middlewares";
import connectDatabase from "./config/database.config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.use(cors({
    origin: ENV.FRONTEND_ORIGIN,
    credentials:true,
}))

app.get("/", async(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
})

app.use(errorHandler)

app.listen(ENV.PORT||8000,async()=>{
    await connectDatabase();
    console.log(`server is running on ${ENV.PORT} in ${ENV.NODE_ENV} mode`);
})