import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomTextGenerator } from "../utils/helper";

const LiveChat = () => {
  const liveMessages = useSelector((store) => store.liveChat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomTextGenerator(25) + "🙂",
        })
      );
      //API  pollling
    }, 100);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="border border-gray-300 bg-slate-100 w-full h-[524px] ml-2 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse ">
      {/* <h1 className="text-lg font-bold my-2 rounded-b w-full">Live Chat</h1> */}
      {liveMessages && (
          liveMessages.map((message, index) => (
            <ChatMessage key={index} data={message} />
          ))
      )}
    </div>
  );
};

export default LiveChat;
