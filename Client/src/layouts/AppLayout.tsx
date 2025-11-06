import React from 'react'
import { Outlet } from 'react-router-dom'
import AppWrapper from '@/components/App-Wrapper'
import ChatList from "@/components/chats/chat-list";
// import useChatId from "@/hooks/use-chat-id";
import { cn } from "@/lib/utils";


const AppLayout = () => {
  return (
    <AppWrapper>
      <div className="h-full">
        <div >
          <ChatList />
        </div>
        <div
          className={cn("lg:!pl-95 pl-7")}
        >
          <Outlet />
        </div>
      </div>
    </AppWrapper>
    
  )
}

export default AppLayout