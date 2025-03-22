'use client';

import AskBox from "@/components/askBox/askBox";
import ChatArea from "@/components/chatArea/chatArea";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const handleRequest = (inputValue) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: inputValue },
    ]);
  }

  return (
    <div className="flex flex-col h-screen w-220 fixed left-1/2 -translate-x-1/2 
      bottom-1.5 ">
        <ChatArea messages={messages}></ChatArea>
        <AskBox handleSend={handleRequest}></AskBox>
    </div>
  );
}
