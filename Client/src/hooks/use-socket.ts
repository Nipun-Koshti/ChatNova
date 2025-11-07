import {io, Socket } from "socket.io-client"
import {create} from "zustand"

const BASE_URL = import.meta.env.MODE==="development"?import.meta.env.VITE_API_URL : "/"

interface SocketState{
    socket: Socket | null;
    onlineUser : string[];
    connectSocket:()=>void;
    dissconnectSocket: ()=>void;
}

export const useSocket = create<SocketState>()((set,get)=>({
    socket:null,
    onlineUser:[],
    connectSocket:()=>{
        const {socket}=get()
        if(socket)return;

        const newSocket = io(BASE_URL,{
            withCredentials:true,
            autoConnect:true
        })

        set({socket:newSocket})

        newSocket.on("connect",()=>{
            console.log("Socket connected",newSocket.id)
        })

        newSocket.on("online:users",(userIds)=>{
            console.log("online user", userIds)
            set({onlineUser:userIds})
        })

    },
    dissconnectSocket:()=>{
        const {socket} = get();

        if(socket){
            socket.disconnect();
            set({ socket:null});
        }
    },

}))
