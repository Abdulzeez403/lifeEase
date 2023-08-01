import React, { useEffect, useState } from "react";
import { socketClient, useSocket } from "@/components/socket";
import { IChat } from "./model";
import { ApImage } from "@/components/image";
import ProfileImage from "../../../public/image/hostel1.png";
import Image from "next/image";

export const ChatPage = () => {
  console.log("check");
  const [message, setMessage] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [chats, setChats] = useState<IChat[]>([]);

  const sendMessage = () => {
    socketClient.emit("sendMessage", { sender, message });
  };

  useSocket("receiveMessage", (data: IChat) => {
    setChats([...chats, data]);
  });

  useSocket("receiveAllMessage", (data: IChat[]) => {
    setChats(data);
  });
  useEffect(() => {}, []);

  return (
    <div className="">
      {/* <div>
        {chats.map((c) => (
          <div key={c?._id}>
            <div>{`Sender: ${c?.sender}`}</div>
            <div>{`Message: ${c?.message}`}</div>
          </div>
        ))}
      </div> */}

      <div className="flex gap-4 w-full">
        <div className="w-[30%]">
          <input type="search" name="" id="" placeholder="search" />
          <div className="flex gap-4 items-center">
            <div className="">
              <ApImage
                src={ProfileImage}
                alt="profileImage"
                style={{ borderRadius: "100%", width: "20px", height: "20px" }}
              />
            </div>
            <div>
              <h1 className="font-bold">Pablo Richie</h1>
              <p>Room service</p>
            </div>
          </div>
        </div>
        <div className="w-[70%] bg-gray-100">
          <div className="flex gap-4 items-center border-b">
            <ApImage
              src={ProfileImage}
              alt="user-image"
              className="rounded-xl object-cover"
              width={100}
              height={100}
            />
            <div>
              <h1 className="font-bold">Pablo Richie</h1>
              <p>Not Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center w-full">
        <input
          type="text"
          value={sender}
          placeholder="Name heree"
          onChange={(e) => {
            e.preventDefault, setSender(e.target.value);
          }}
          className=" px-4 rounded-md border"
        />
        <textarea
          // name={message}
          value={message}
          rows={4}
          // cols={3}
          placeholder="Message heree"
          onChange={(e) => {
            e.preventDefault, setMessage(e.target.value);
          }}
          className=" px-4 py-2 rounded-md border"
        />
      </div>
      <button onClick={sendMessage}>Send</button> */}
    </div>
  );
};
