import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { youtubeGetSearchValueAPI } from "../../Utils/ApiGenerator";
import SearchResultSuggation from "./SearchResultSuggation";

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const [sugested, setSuggest] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getsearchResult = async () => {
    const response = await youtubeGetSearchValueAPI(searchValue);
    setSuggest(response);
  };

  useEffect(() => {
    getsearchResult();
  }, [searchValue]);

  return (
    <div className={`m-2 ${isMenuOpen ? "w-[calc(100%-5rem)]" : "w-full"}`}>
      {sugested &&
        sugested.map((value) => {
          return (
            <div className="" key={value.etag}>
              <SearchResultSuggation info={value} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchResultContainer;
