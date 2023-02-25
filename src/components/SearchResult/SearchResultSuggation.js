import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDefaultSrc } from "../../Utils/commonValue";
import Button from "../Button";

const SearchResultSuggation = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { title, channelTitle, thumbnails, channelId, description } = snippet;
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (id?.kind === "youtube#channel") {
      navigate("/search?search=");
    } else {
      navigate("/watch?v=" + id?.videoId + "&chid=" + snippet?.channelId);
    }
  };
  return (
    <div className=" h-[200px] my-2 w-full p-2 flex justify-center content-center ">
      <div className="w-full flex md:flex-none ">
        <div className="w-72">
          <Link to={"/watch?v=" + id?.videoId + "&chid=" + snippet?.channelId}>
            <img
              onError={addDefaultSrc}
              className={`border border-black h-full ${
                id?.kind === "youtube#channel"
                  ? "rounded-[100%] "
                  : "rounded-lg"
              }`}
              src={thumbnails?.high?.url}
              alt="Video Thumbnail"
            />
          </Link>
        </div>
        <div className="w-full overflow-clip p-2 ">
          <div className="overflow-clip font-bold truncate ">{title}</div>
          <div className="flex py-2  justify-between">
            <div className="flex">
              <img
                width={25}
                height={25}
                onError={addDefaultSrc}
                className={`rounded-[100%]`}
                src={thumbnails?.high?.url}
                alt="Video Thumbnail"
              />
              <span className="overflow-clip pl-2">{channelTitle}</span>
            </div>
            {id?.kind === "youtube#channel" && (
              <div className="">
                <Button
                  name={"Subscribe"}
                  style={"m-0 bg-red-800"}
                  onclick={(e) => onClickHandler(id?.kind)}
                />
              </div>
            )}
          </div>
          <p className="overflow-auto text-clip ">{description}</p>
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
