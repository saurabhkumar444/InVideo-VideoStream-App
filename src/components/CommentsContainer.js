import React, { useDebugValue, useEffect, useState } from "react";
import { getCommentsApi } from "../Utils/ApiGenerator";
import { addDefaultSrc } from "../Utils/commonValue";

const Commont = ({ snippet }) => {
  //   const { name, text, replies } = data;
  const { textOriginal, authorDisplayName, authorProfileImageUrl } = snippet;
  return (
    <div className="flex shadow-sm  bg-gray-100 rounded-lg m-1items-start overflow-auto">
      <img
        onError={addDefaultSrc}
        className="h-12 w-12 rounded-full m-1"
        src={authorProfileImageUrl}
        alt="logo"
      />
      <div className="pl-2">
        <h1 className="font-bold">{authorDisplayName}</h1>
        <h2>{textOriginal}</h2>
      </div>
    </div>
  );
};

const CommontsList = ({ comments }) => {
  return comments.map((value) => {
    return (
      <div key={value.id} className="p-1">
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
    const response = await getCommentsApi(youTubeVideochannelId);
    setCommentsList(response);
  };

  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      {commontsList && <CommontsList comments={commontsList} />}
    </div>
  );
};

export default CommentsContainer;
