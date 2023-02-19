import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { youtubeGetSearchValueAPI } from "../../Utils/ApiGenerator";
import SearchResultSuggation from "./SearchResultSuggation";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const [sugested, setSuggest] = useState([]);
  useEffect(() => {
    getsearchResult();
  }, [searchValue]);

  const getsearchResult = async () => {
    const response = await youtubeGetSearchValueAPI(searchValue);
    console.log(">>>>>", response);
    setSuggest(response);
  };
  return (
    <div className="m-2">
      {sugested &&
        sugested.map((value) => {
          console.log(">>>>>>>>>", value);
          return (
            <Link
              to={
                "/watch?v=" +
                value?.id?.videoId +
                "&chid=" +
                value?.snippet?.channelId
              }
              key={value.id}
            >
              <SearchResultSuggation info={value} />
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResultContainer;
