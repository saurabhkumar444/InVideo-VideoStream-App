import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_URL } from "../Utils/contants";
import VideoCard from "./VideoCard";

function VideoContainer() {
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
    <div className="flex flex-wrap justify-start items-center">
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
}

export default VideoContainer;
