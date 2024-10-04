import React from "react";

const ChatMessage = ({data}) => {
    const{name,message}=data;
  return (
    <div className="flex mt-2">
      <img
        className="rounded-full w-[25px] h-[30px]"
        alt="user"
        src="https://imgs.search.brave.com/7JEcL0W-eLti3ltU3CvkV2arfroMm3t0K6LWfrRSkBk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LnBuZ2h1dC5jb20v/dC82LzUvNC9wSkg1/ZmZ4TnZhL2VtYWls/LXVzZXItYWNjb3Vu/dC1zeW1ib2wtcGFz/c3dvcmQtYmxhY2su/anBn"
      />
      <h2 className="font-semibold text-gray-500 mx-2">{name}</h2>
      <h4 className="ml-1">{message}</h4>
    </div>
  );
};

export default ChatMessage;
