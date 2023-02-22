import { getByTitle } from "@testing-library/react";
import React from "react";
import { addDefaultSrc } from "../Utils/commonValue";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 10000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, channelId } = snippet;
  const { likeCount, viewCount } = statistics;
  return (
    <div className="rounded-lg p-2 m-2 w-60 h-72 shadow hover:border-2 hover:shadow-xl   border-gray-500">
      <img
        onError={addDefaultSrc}
        className="rounded-lg"
        src={thumbnails?.standard?.url}
        alt="Video Thumbnail"
      />
      <ul>
        <li className="">
          <div className="flex p-2 ">
            <img
              onError={addDefaultSrc}
              className="h-5 w-5"
              src={"https://i.ytimg.com/vi/" + info.id + "/mqdefault.jpg"}
              alt="Chaneel logo"
            />
            <div className="pl-2 truncate">{channelTitle}</div>
          </div>
        </li>
        <li className="font-bold truncate "> {title}</li>
        <li>
          <div className="flex">
            {kFormatter(viewCount)} views
            <span className="pl-2 items-center justify-center flex">
              <img
                onError={addDefaultSrc}
                className="h-5 w-5 my-1"
                src={require("../assest/like.png")}
                alt="likes"
              />
              <div className="px-2">
                {likeCount && `${kFormatter(likeCount)}`}
              </div>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
