import { Request, Response, NextFunction } from "express"

type AsyncControler=( 
    req:Request, 
    res:Response, 
    next:NextFunction
)=>Promise<any>

const asyncHandler = (controller:AsyncControler)=>async(req:Request,res:Response,next:NextFunction)=>{
    try {
        await controller(req,res,next);
    } catch (error) {
        next(error)
    }
};

export default asyncHandler;