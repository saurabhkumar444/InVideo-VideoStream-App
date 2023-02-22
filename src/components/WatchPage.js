import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { closedMenu } from "../Utils/appSlice";
import { YOUTUBE_API_URL } from "../Utils/ApiGenerator";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggationCard from "./SuggationCard";
import { addDefaultSrc } from "../Utils/commonValue";
import Button from "./Button";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const youTubeVideoId = searchParams.get("v");
  const youTubeVideochannelId = searchParams.get("chid");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedMenu());
  }, []);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="p-5  h-[100%] w-[100%] flex ">
      <div className="">
        <div>
          <iframe
            // width="800"
            height="500"
            className="w-[100%] object-cover  "
            src={
              "https://www.youtube.com/embed/" + youTubeVideoId + "?autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-full h-24">
          <div className=" p-2 text-lg font-bold">
            KAPIL Sharma & Funny Indian Memes 🤣 (MEME REVIEW)
          </div>
          <div className="flex bg-blue-500w-full pl-5 items-center">
            <div className="flex items-center">
              <img
                onError={addDefaultSrc}
                className="rounded-lg h-12 w-12"
                src={
                  "https://yt3.ggpht.com/ytc/AL5GRJU9-glB9qZjVdxCIHqqoXwPRnunLq58thueX4G9=s88-c-k-c0x00ffffff-no-rj"
                }
                alt="Logo"
              />
              <span className="text-x font-bold pl-2">D-MonchiK </span>
              <Button
                style=" bg-red-900 font-bold ml-5"
                name={"Subscribe"}
                onClick={() => alert("Subscribe ")}
              />
            </div>
            <div className="bg-fuchsia-200 w-96"></div>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-3 ">
          <div className="md:col-span-2 ">
            <CommentsContainer youTubeVideochannelId={youTubeVideochannelId} />
          </div>
          <div className="w-full pt-5 ">
            {/* <div>
              <LiveChat />
            </div> */}
            <div className="font-bold ">Suggation:</div>
            {videos &&
              videos.map((video) => (
                <Link
                  key={video.id}
                  to={
                    "/watch?v=" +
                    video.id +
                    "&chid=" +
                    video?.snippet?.channelId
                  }
                >
                  <SuggationCard info={video} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
