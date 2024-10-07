import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomTextGenerator } from "../utils/helper";

const LiveChat = () => {
  const liveMessages = useSelector((store) => store.liveChat.messages);
  const [yourChat, setYourchat] = useState("");

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
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="border border-gray-300 bg-slate-100 w-full h-[524px] ml-2 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {/* <h1 className="text-lg font-bold my-2 rounded-b w-full">Live Chat</h1> */}
        {liveMessages &&
          liveMessages.map((message, index) => (
            <ChatMessage key={index} data={message} />
          ))}
      </div>
      <form
        className="ml-2 w-full mt-2 flex justify-between"
        onSubmit={(e) => {
          e.preventDefault()
          // console.log(yourChat)
          dispatch(addMessage({
            name:"user",
            message:yourChat
          }))
          setYourchat("")
        }}
      >
        <input
          type="text"
          className="border border-black px-2 py-1 w-full mr-2 rounded-lg"
          placeholder="type in live chat"
          value={yourChat}
          onChange={(e) => setYourchat(e.target.value)}
        />
        <button className="px-4 py-2 rounded-full bg-gray-200">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
