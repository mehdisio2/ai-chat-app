'use client';

import AskBox from "@/components/askBox/askBox";
import ChatArea from "@/components/chatArea/chatArea";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const handleRequest = (inputValue) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: inputValue },
    ]);
  }

  console.log(messages);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", content: data.content },
        ]);
        console.log(data);

      }
    };

    if (messages.length > 0 && messages[messages.length - 1].role === "user") {
      fetchData();
    }
  }
  , [messages]
);



  return (
    <div className="flex flex-col h-screen w-220 fixed left-1/2 -translate-x-1/2 
      bottom-1.5 ">
        <ChatArea messages={messages}></ChatArea>
        <AskBox handleSend={handleRequest}></AskBox>
    </div>
  );
}
