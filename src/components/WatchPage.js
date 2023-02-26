import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { closedMenu } from "../Utils/appSlice";
import {
  getSelectedVideoDetails,
  youtubeSelectedVideo,
  YOUTUBE_API_URL,
} from "../Utils/ApiGenerator";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggationCard from "./SuggationCard";
import { addDefaultSrc } from "../Utils/commonValue";
import Button from "./Button";
import { selectedVideoData } from "../Utils/selectedVideoSlice";
import ChannelDetailscard from "./ChannelDetailscard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const youTubeVideoId = searchParams.get("v");
  const youTubeVideochannelId = searchParams.get("chid");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const dispatch = useDispatch();

  const getSelectedVideo = useCallback(async () => {
    const response = await getSelectedVideoDetails(youTubeVideoId);
    dispatch(selectedVideoData(response));
    setSelectedVideo(response);
  }, [youTubeVideoId]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getSelectedVideo();
    dispatch(closedMenu());
  }, [youTubeVideoId]);

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div
      className={`p-2 h-[100%] ${
        isMenuOpen ? "w-[calc(100%-5rem)]" : "w-full"
      }`}
    >
      <div className="">
        <iframe
          // width="800"
          height="500"
          className="w-full object-cover  "
          src={
            "https://www.youtube.com/embed/" + youTubeVideoId + "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="">
          {selectedVideo?.length && (
            <ChannelDetailscard chennelData={selectedVideo[0]} />
          )}
        </div>
      </div>

      <div className=" md:grid md:grid-cols-3 ">
        <div className="md:col-span-2 ">
          <CommentsContainer youTubeVideochannelId={youTubeVideochannelId} />
        </div>
        <div className="w-full pt-2 ">
          {/* <div>
              <LiveChat />
            </div> */}
          <div className="font-bold text-xl">Suggation:</div>
          {videos &&
            videos.map((video) => (
              <Link
                key={video.id}
                to={
                  "/watch?v=" + video.id + "&chid=" + video?.snippet?.channelId
                }
              >
                <SuggationCard info={video} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
