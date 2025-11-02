import UserModel from "../models/user.model";
import { NotFoundException, UnauthorizedException } from "../utility/app-error";
import { compareValue } from "../utility/bcrypt";
import { LoginSchemaType, passwordSchema, RegisterSchemaType } from "../validators/auth.validatore";

export const registerService = async(body:RegisterSchemaType)=>{
    const {email} = body;
    const existingUser = await UserModel.findOne({email});
    if(existingUser) throw new UnauthorizedException("User already exist");
    
    const newUser = new UserModel({
        ...body,
    });

    await newUser.save();
    return newUser;
};


export const loginService = async(body: LoginSchemaType)=>{
    const {email, password} = body;

    const user = await UserModel.findOne({email});

    if(!user){
        throw new NotFoundException("Invalid Email or password");
    }

    const pass = await user.comparePassword(password);

    if(!pass){
        throw new UnauthorizedException("Invalid Password or Email");
    }

    return user;
}