import  express, { NextFunction }  from "express";
import "dotenv/config"
import cookieParser from "cookie-parser";
import cors from "cors"
import {ENV }from "./config/env.config"
import { errorHandler } from "./middlewares/errorHandler.middlewares";
import connectDatabase from "./config/database.config";
import passport from "passport";
import "./config/passport.config"
import { asyncHandler } from "./middlewares/asyncHandler.middlewares";
import { HTTPSTATUS } from "./config/http.config";
import router from "./routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.use(cors({
    origin: ENV.FRONTEND_ORIGIN,
    credentials:true,
}))
app.use(passport.initialize())


app.get('/health', asyncHandler(async(req , res)=>{
     res.status(HTTPSTATUS.OK).json({
      message: "Server is healthy",
      status: "OK",
    });
}))


app.use("/api", router);

app.use(errorHandler)

app.listen(ENV.PORT||8000,async()=>{
    await connectDatabase();
    console.log(`server is running on ${ENV.PORT} in ${ENV.NODE_ENV} mode`);
})