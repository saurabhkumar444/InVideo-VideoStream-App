import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getvideoList } from "../Utils/ApiGenerator";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
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
