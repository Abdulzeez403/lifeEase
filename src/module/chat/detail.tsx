import ApButton from "@/components/button";
import { ApTextInput } from "@/components/input/TextInput";
import { Formik, Form } from "formik";
import React from "react";
import { io } from "socket.io-client";

export const ChatBox = () => {
  const handleSubmit = (values: any) => {
    const socketClient = io("http://localhost:5000");
    socketClient.on("connect", () => {
      console.log(socketClient.connected, "connected");

      socketClient.emit("sendMessage", {
        sender: values.sender,
        message: values.message,
      });
    });
  };
  return (
    <div>
      <Formik
        initialValues={{ sender: "", message: "" }}
        onSubmit={handleSubmit}
      >
        <Form className="text-center m-auto mt-12 w-[50%]">
          <h1>Send Message</h1>
          <ApTextInput
            label="Sender Name"
            type="text"
            name="sender"
            className="rounded-lg px-3 py-2"
          />
          <ApTextInput
            label="Message"
            type="textarea"
            name="message"
            className="rounded-lg px-3 py-1.5"
          />
          <ApButton
            type="submit"
            title="Post"
            className="border rounded-lg px-4 py-2"
          />
        </Form>
      </Formik>
    </div>
  );
};
