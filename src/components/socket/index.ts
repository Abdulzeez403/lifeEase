import { useEffect } from "react";
import io from "socket.io-client";

const socketClient = io("http://localhost:5000"); // Replace the URL with your backend server's URL

const useSocket = (eventName: string, callback: (data: any) => void) => {
  useEffect(() => {
    socketClient.on(eventName, callback);
  }, [eventName, callback]);
};

export { socketClient, useSocket };
