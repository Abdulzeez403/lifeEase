import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ChatBox } from "./detail";

export const ChatPage = () => {
  console.log("check");
  const [message, setMessage] = useState<{ sender: string; message: string }>({
    message: "",
    sender: "",
  });
  useEffect(() => {
    const socketClient = io("https://life-ease.onrender.com");
    socketClient.on("connect", () => {
      console.log(socketClient.connected, "connected");

      socketClient.on("receiveMessage", (data) => {
        console.log(data);
        setMessage(data);
      });
    });
  }, []);

  return (
    <div>
      <div>
        <h1>{`Sender: ${message.sender}`}</h1>
        <p>{`Message: ${message.message}`}</p>
      </div>
      <ChatBox />
    </div>
  );
};
