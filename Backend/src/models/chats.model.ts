import mongoose, {Document, Mongoose, Schema} from "mongoose";


export interface ChatsDocument extends Document{
    participants: mongoose.Types.ObjectId[],
    lastMessage:  mongoose.Types.ObjectId,
    isGroup:boolean,
    groupName: string,
    createdBy:mongoose.Types.ObjectId,
    createdAt:Date,
    UpdatedAt:Date,
}


const chatsSchema = new Schema<ChatsDocument>({
    participants:[
        {
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true,

        },
    ],

    lastMessage: {
        type:Schema.Types.ObjectId,
        ref:"Message",
        default:null,
    },

    isGroup:{
        type:Boolean,
        default:false,

    },

    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,

    }
},{
    timestamps:true,

})

const chatModel = mongoose.model<ChatsDocument>("Chats", chatsSchema)

export default chatModel