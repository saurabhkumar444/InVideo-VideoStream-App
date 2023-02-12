import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { closedMenu } from "../Utils/appSlice";
import { YOUTUBE_API_URL } from "../Utils/contants";
import CommentsContainer from "./CommentsContainer";
import SuggationCard from "./SuggationCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const youTubeVideoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedMenu());
  }, []);
  console.log("searchParams", youTubeVideoId);
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
        <iframe
          width="1000"
          height="500"
          src={
            "https://www.youtube.com/embed/" + youTubeVideoId + "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer youTubeVideoId={youTubeVideoId} />
      </div>
      <div className="w-[100%] overflow-auto ml-5">
        <div className="font-bold">Suggation:</div>
        {videos &&
          videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <SuggationCard info={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
