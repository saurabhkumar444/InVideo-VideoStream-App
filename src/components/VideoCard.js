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
    <div className="rounded-lg p-2 m-2 w-64 h-72 shadow hover:border-2 hover:shadow-xl   border-gray-500">
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
            <div className="pl-2">{channelTitle}</div>
          </div>
        </li>
        <li className="font-bold truncate "> {title}</li>
        <li>
          <div className="flex">
            {kFormatter(viewCount)} views
            <span className="pl-2">
              <img
                onError={addDefaultSrc}
                className="h-6 w-6"
                src={require("../assest/like.png")}
                alt="likes"
              />
            </span>
            {likeCount && `${kFormatter(likeCount)}`}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
