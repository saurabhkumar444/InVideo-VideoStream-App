import React from "react";
import ChatMassage from "./ChatMassage";

const LiveChat = () => {
  return (
    <div className="w-full h-[500px] ml-2 p-2 border-black bg-slate-400">
      <ChatMassage
        userData="Saurabh"
        massage="Hi saurabh maurya  Hi saurabh maurya here Hi saurabh Hi saurabh maurya here Hi saurabh maurya here Hi saurabh maurya here Hi saurabh maurya heremaurya here"
      />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
      <ChatMassage userData="Saurabh" massage="Hi saurabh maurya here" />
    </div>
  );
};

export default LiveChat;
