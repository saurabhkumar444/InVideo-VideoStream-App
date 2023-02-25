import React from "react";
import { addDefaultSrc } from "../Utils/commonValue";
import Button from "./Button";

const ChannelDetailscard = ({ chennelData }) => {
  const { snippet, statistics } = chennelData;
  console.log("props", snippet);
  const { description, thumbnails, localized, channelTitle } = snippet;
  return (
    <div className="">
      <div
        className="p-2 text-lg font-bold text-clip max-h-20
    "
      >
        {localized?.title}
      </div>
      <div className="flex w-full pl-5 items-center justify-between">
        <div className="flex items-center">
          <img
            onError={addDefaultSrc}
            className="rounded-[100%] h-12 w-12"
            src={thumbnails?.medium?.url}
            alt="Logo"
          />
          <span className="text-x font-bold pl-2"> {channelTitle}</span>
        </div>
        <Button
          style=" bg-red-900 font-bold ml-5"
          name={"Subscribe"}
          onClick={() => alert("Subscribe ")}
        />
      </div>
      {/* <div className="bg-fuchsia-200 h-24 overflow-auto">{description}</div> */}
    </div>
  );
};

export default ChannelDetailscard;
