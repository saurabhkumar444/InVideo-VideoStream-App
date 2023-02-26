import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import {
  getSelectedChannelVideoList,
  getSelectedChennelDetails,
  YOUTUBE_API_URL,
} from "../../Utils/ApiGenerator";
import { closedMenu } from "../../Utils/appSlice";
import { addDefaultSrc, kFormatter } from "../../Utils/commonValue";
import { selectedVideoData } from "../../Utils/selectedVideoSlice";
import Button from "../Button";
import ChannelVideoCard from "./ChannelVideoCard";

const ChannelContainer = () => {
  const [searchParams] = useSearchParams();
  const [selectedChannel, setSelectedChannel] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [subscribe, setsubscribe] = useState(false);
  const dispatch = useDispatch();
  const youTubeVideochannelId = searchParams.get("chnameid");
  const [videos, setVideos] = useState([]);

  const getSelectedVideo = useCallback(async () => {
    const response = await getSelectedChennelDetails(youTubeVideochannelId);
    // dispatch(selectedVideoData(response));
    setSelectedChannel(response);
  }, [youTubeVideochannelId]);

  useEffect(() => {
    getSelectedVideo();
    dispatch(closedMenu());
  }, [youTubeVideochannelId]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await getSelectedChannelVideoList(youTubeVideochannelId);
    dispatch(selectedVideoData(response));
    // setSelectedVideo(response);
    setVideos(response);
  };

  return (
    <div
      className={`${
        isMenuOpen ? "w-[calc(100%-5rem)]" : "w-full"
      } h-full p-2 m-1`}
    >
      <div className="h-44 overflow-hidden rounded-lg shadow-lg">
        <img
          onError={addDefaultSrc}
          className="h-44 w-full"
          src={
            "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="Logo"
        />
      </div>
      {selectedChannel && (
        <div className="w-full p-2 items-center justify-between sm:flex shadow-sm">
          <div className="flex items-center ">
            <img
              onError={addDefaultSrc}
              className="rounded-[100%] h-24 w-24"
              src={selectedChannel[0]?.snippet?.thumbnails?.medium?.url}
              alt="Logo"
            />
            <div>
              <div className="text-xl font-bold pl-2">
                {selectedChannel[0]?.snippet?.title}
              </div>
              <div className="text-x  pl-2">
                {selectedChannel[0]?.snippet?.customUrl}
              </div>
              <div className="text-x  pl-2">
                {kFormatter(selectedChannel[0]?.statistics?.subscriberCount)}{" "}
                subscribers
              </div>
            </div>
          </div>
          <div className="p-2 ">
            <Button
              style={`${
                subscribe ? "bg-red-900" : "bg-gray-100"
              }  font-bold ml-5`}
              name={subscribe ? "Subscribe" : "Unsubscribe"}
              onClick={() => setsubscribe(!subscribe)}
            />
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center items-center ">
        {videos &&
          videos.map((video) => {
            return (
              <Link
                to={
                  "/watch?v=" +
                  video?.snippet?.thumbnails?.medium?.url.substring(23, 34) +
                  "&chid=" +
                  video?.snippet?.channelId
                }
                key={video.id}
              >
                {console.log(video?.snippet?.thumbnails?.default?.url)}
                {selectedChannel &&
                  !video?.snippet?.thumbnails?.default?.url.includes(
                    "no_thumbnail"
                  ) && (
                    <ChannelVideoCard
                      info={video}
                      channelLogo={selectedChannel[0]}
                    />
                  )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ChannelContainer;
