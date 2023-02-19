import React from "react";
import { addDefaultSrc } from "../Utils/commonValue";

const SuggationCard = ({ info }) => {
  //   console.log(">>>>>", info);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, channelId } = snippet;
  const { likeCount, viewCount } = statistics || [];
  return (
    <div className=" h-28 w-96 p-2 m-2 flex overflow-hidden">
      <img
        onError={addDefaultSrc}
        className="rounded-lg"
        src={thumbnails?.default?.url}
        alt="Video Thumbnail"
      />
      <div className="pl-2 mr-2 ">
        <ul>
          <li className="font-bold truncate"> {title}</li>
          <li>{channelTitle}</li>
          <li>
            <div className="flex">
              View: {viewCount} Like: {likeCount}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuggationCard;
