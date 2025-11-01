import mongoose,{Document, Schema} from "mongoose";

export interface MessageDocuemnt extends Document{
    chatId: mongoose.Types.ObjectId,
    sender: mongoose.Types.ObjectId,
    content?:string,
    image?:string,
    replyTo?:mongoose.Types.ObjectId,

    createdAt:Date,
    updatedAt:Date,
}

const messageSchema = new Schema<MessageDocuemnt>({
    chatId:{
        type:Schema.Types.ObjectId,
        ref:"Chats",
        required:true,
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    content:{
        type:String,
    },
    image:{
        type:String, 
    },
    replyTo:{
        type:Schema.Types.ObjectId,
        ref:"Chats",
        default:null,
    }
},{
    timestamps:true,
})


const messageModel = mongoose.model<MessageDocuemnt>("Message",messageSchema);

export default messageModel;