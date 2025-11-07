import React from 'react'
import { Outlet } from 'react-router-dom'
import AppWrapper from '@/components/App-Wrapper'
import ChatList from "@/components/chats/chat-list";
import useChatId from "@/hooks/use-chat-id";
import { cn } from "@/lib/utils";


const AppLayout = () => {
  const chatId = useChatId();
  return (
    <AppWrapper>
      <div className="h-full">
        {/* ChatList */}
        <div className={cn(chatId ? "hidden lg:block" : "block")}>
          <ChatList />
        </div>
        <div
          className={cn(
            "lg:!pl-95 pl-7",
            !chatId ? "hidden lg:block" : "block"
          )}
        >
          <Outlet />
        </div>
      </div>
    </AppWrapper>
    
  )
}

export default AppLayout