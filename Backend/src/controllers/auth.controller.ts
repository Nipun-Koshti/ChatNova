import {Response, Request, NextFunction} from "express"
import {asyncHandler} from "../middlewares/asyncHandler.middlewares"
import { loginSchema, registerSchema } from "../validators/auth.validatore"
import { loginService, registerService } from "../services/auth.service"
import { clearJwtAuthCookie, setJwtAuthCookie } from "../utility/cookie"
import { HTTPSTATUS } from "../config/http.config"

export const registerController  = asyncHandler(
    async(req: Request, res: Response)=>{
        const body = registerSchema.parse(req.body);

        const user = await registerService(body)
        const userId = user._id as string;

        return setJwtAuthCookie({res, userId}).status(HTTPSTATUS.CREATED).json({message:"User created & Login Sucessfully", user})
        
    }
)

export const loginController  = asyncHandler(
    async(req: Request, res: Response)=>{
        const body = loginSchema.parse(req.body);

        const user = await loginService(body)
        const userId = user._id as string;

        return setJwtAuthCookie({res, userId}).status(HTTPSTATUS.OK).json({message:"Login Sucessfully", user})
        
    }
)

export const LogoutController = asyncHandler(
    async(req:Request, res:Response)=>{
        return clearJwtAuthCookie(res).status(HTTPSTATUS.OK).json({message:"Logout Sucessfully"})
    }
)


export const authStatuController = asyncHandler(
    async(req:Request, res:Response)=>{
        
        const user = req.user ;
        return res.status(HTTPSTATUS.OK).json({message:"Authicated the user", user});

    }
)