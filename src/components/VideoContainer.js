import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getvideoList } from "../Utils/ApiGenerator";
import { openMenu } from "../Utils/appSlice";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    dispatch(openMenu());
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await getvideoList();
    // dispatch(selectedVideoData(response));

    setVideos(response);
  };

  return (
    <div className="flex flex-wrap justify-center items-center ">
      {videos &&
        videos.map((video) => {
          return (
            <Link
              to={"/watch?v=" + video.id + "&chid=" + video?.snippet?.channelId}
              key={video.id}
            >
              <VideoCard info={video} />
            </Link>
          );
        })}
    </div>
  );
}

export default VideoContainer;
