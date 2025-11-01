import mongoose,{Document, Schema} from "mongoose";
import { compareValue, hashValue } from "../utility/bcrypt";

export interface UserDocument extends Document{
    name: string;
    email: string;
    password:string;
    avatar?: string | null;
    createdAt: Date;
    updatedAt: Date;

}

const userSchema = new Schema<UserDocument>({
    name:{type:String},
    email:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default: null
    },

},{
    timestamps:true,
    toJSON:{
        transform: (doc, ret)=>{
            if(ret){
                delete (ret as any).password;
            }
            return ret;
        }
    }
}

)


userSchema.pre("save",async function(next){
    if(this.password && this.isModified("password")){
        this.password = await hashValue(this.password)
    }
})

userSchema.methods.comparePassword = async function(value: string){
    return compareValue(value, this.password);
}


const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel; 

