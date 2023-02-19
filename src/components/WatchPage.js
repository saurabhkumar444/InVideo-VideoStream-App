import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { closedMenu } from "../Utils/appSlice";
import { YOUTUBE_API_URL } from "../Utils/ApiGenerator";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggationCard from "./SuggationCard";

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
    <div className="p-5 m-1 h-[100%] w-[100%] flex ">
      <div className="">
        <div>
          <iframe
            // width="800"
            height="500"
            className="w-[100%] object-cover p-2 "
            src={
              "https://www.youtube.com/embed/" + youTubeVideoId + "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex">
          <CommentsContainer youTubeVideochannelId={youTubeVideochannelId} />
          <div className="w-[100%] overflow-auto ml-5 ">
            {/* <div>
              <LiveChat />
            </div> */}
            <div className="font-bold">Suggation:</div>
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
