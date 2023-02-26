import React from "react";
import { addDefaultSrc } from "../../Utils/commonValue";

const ChannelVideoCard = ({ info, channelLogo }) => {
  const { snippet, statistics, contentDetails } = info;
  const { title, channelTitle, thumbnails, channelId } = snippet;
  //   const { likeCount, viewCount } = statistics;
  return (
    <div className="rounded-lg p-2 m-2 w-60 h-72 shadow hover:border-[1px] hover:shadow-xl border-gray-500">
      <div className="flex-row relative">
        <div className="absolute w-32 object-contain h-full backdrop-blur-sm z-10 flex-col ml-24 rounded-lg  p-10">
          <div className="text-white font-bold text-xl justify-center items-center pl-5">
            {contentDetails?.itemCount}
          </div>
          <img
            onError={addDefaultSrc}
            className="rounded-lg "
            src={
              "https://cdn.iconscout.com/icon/free/png-256/playlist-play-1780205-1513043.png"
            }
            alt="Video Thumbnail"
          />
        </div>
        <img
          onError={addDefaultSrc}
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="Video Thumbnail"
        />
      </div>
      <ul>
        <li className="">
          <div className="flex p-2 ">
            <img
              onError={addDefaultSrc}
              className="h-5 w-5 rounded-full"
              src={channelLogo?.snippet?.thumbnails?.medium?.url}
              alt="Chaneel logo"
            />
            <div className="pl-2 truncate">{channelTitle}</div>
          </div>
        </li>
        <li className="font-bold truncate "> {title}</li>
        <li className="text-sm ">View full playlist</li>
      </ul>
    </div>
  );
};

export default ChannelVideoCard;
