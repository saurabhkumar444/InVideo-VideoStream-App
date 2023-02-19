import React, { useDebugValue, useEffect, useState } from "react";
import { YOUTUBE_COMMENT_API } from "../Utils/ApiGenerator";
import { addDefaultSrc } from "../Utils/commonValue";

const Commont = ({ snippet }) => {
  //   const { name, text, replies } = data;
  const { textOriginal, authorDisplayName, authorProfileImageUrl } = snippet;
  return (
    <div className="flex shadow-sm p-2 bg-gray-100 rounded-lg m-1">
      <img
        onError={addDefaultSrc}
        className="h-12 w-12 rounded-full"
        src={authorProfileImageUrl}
        alt="logo"
      />
      <div className="px-3">
        <h1 className="font-bold">{authorDisplayName}</h1>
        <h2>{textOriginal}</h2>
      </div>
    </div>
  );
};

const CommontsList = ({ comments }) => {
  return comments.map((value) => {
    return (
      <div key={value.id}>
        <Commont snippet={value?.snippet?.topLevelComment?.snippet} />
        <div className="pl-5 border border-l-black ml-5">
          {value?.replies &&
            value?.replies?.comments.map((subValue) => {
              return <Commont key={subValue.id} snippet={subValue?.snippet} />;
            })}
        </div>
      </div>
    );
  });
};

const CommentsContainer = ({ youTubeVideochannelId }) => {
  const [commontsList, setCommentsList] = useState([]);

  useEffect(() => {
    getCommentslist();
  }, []);

  const getCommentslist = async () => {
    const response = await YOUTUBE_COMMENT_API(youTubeVideochannelId);
    setCommentsList(response);
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {commontsList && <CommontsList comments={commontsList} />}
    </div>
  );
};

export default CommentsContainer;
