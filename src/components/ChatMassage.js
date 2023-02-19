import React from "react";
import { addDefaultSrc } from "../Utils/commonValue";

const ChatMassage = (props) => {
  const { userData, massage } = props;
  return (
    <div className="flex p-2">
      <img
        onError={addDefaultSrc}
        className="h-6"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzTIrXK_AJsi-yi6E9yNamVlhURSjgdMgwn2qqxCepqObqP0EGLoEXSdGwwuzA9k6Cnc&usqp=CAU"
        alt="Youtube logo"
      />
      <span className="font-bold pl-2">{userData}</span>
      <span className="pl-2">{massage}</span>
    </div>
  );
};

export default ChatMassage;
