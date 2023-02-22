import React from "react";
import { addDefaultSrc } from "../../Utils/commonValue";

const SearchResultSuggation = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { title, channelTitle, thumbnails, channelId, description } = snippet;
  const { likeCount, viewCount } = statistics || [];
  return (
    <div className=" h-[200px] my-2 w-full p-2 flex justify-center content-center ">
      <div className="w-full flex ">
        <div className="w-72 ">
          <img
            onError={addDefaultSrc}
            className={`border border-black h-full ${
              id?.kind === "youtube#channel" ? "rounded-full " : "rounded-lg"
            }`}
            src={thumbnails?.high?.url}
            alt="Video Thumbnail"
          />
        </div>
        <div className=" w-10/12 p-2 ">
          <div className="overflow-clip font-bold truncate">{title}</div>
          <div className="flex py-2">
            <img
              width={25}
              height={25}
              onError={addDefaultSrc}
              className={`rounded-full`}
              src={thumbnails?.high?.url}
              alt="Video Thumbnail"
            />
            <div className="overflow-clip pl-2">{channelTitle}</div>
          </div>
          <p className="overflow-clip text-clip">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultSuggation;

//  <div className=" h-72 w-full p-2 m-2 flex bg-blue-400 justify-center content-center ">
//    <div className="bg-red-200 w-96 h-60">
//      <img
//        onError={addDefaultSrc}
//        className="rounded-lg h-full"
//        src={thumbnails?.high?.url}
//        alt="Video Thumbnail"
//      />
//    </div>
//    <div className="pl-2 mr-2 h-full bg-green-200 w-full justify-center overflow-auto">
//      {/* <ul> */}
//      {/* <li className="font-bold truncate w-full"> */}
//      <div className="overflow-clip bg-gray-400">{title}</div> {/* </li> */}
//      {/* <li>{channelTitle}</li> */}
//      {/* <li> */}
//      <div className="flex">
//        View: {viewCount} Like: {likeCount}
//      </div>
//      {/* </li> */}
//      {/* </ul> */}
//    </div>
//  </div>;
