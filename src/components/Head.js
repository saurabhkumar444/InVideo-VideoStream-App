import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { youtubeSearchApi } from "../Utils/ApiGenerator";
import { cacheResult, clearSearch } from "../Utils/searchSlice";
import { addDefaultSrc } from "../Utils/commonValue";
import { Link, useNavigate } from "react-router-dom";
import ButtonList from "./ButtonList";

const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 mr-2 text-gray-500 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

function Head() {
  const [searchValue, setSearcValue] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const settime = setTimeout(() => {
      if (searchCache[searchValue]) {
        setSearchSuggestion(searchCache[searchValue]);
      } else getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(settime);
    };
  }, [searchValue]);

  const getSearchSuggestions = async () => {
    if (searchValue.length < 2) return clearSearch(), setShowSuggestion(false);
    // setShowSuggestion(true);
    const response = await youtubeSearchApi(searchValue);

    setSearchSuggestion(response);
    setShowSuggestion(true);
    // update in redux
    dispatch(
      cacheResult({
        [searchValue]: response,
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const suggationSelectHandler = (value) => {
    setShowSuggestion(false);
    setSearcValue(searchValue);
    navigate("/search?search=" + searchValue);
  };

  return (
    <div className=" bg-white z-50">
      <div className="justify-between flex pl-5   items-center  ">
        <div className="flex items-center  ">
          <img
            onError={addDefaultSrc}
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer"
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
            alt="logo"
          />
          <a href="/">
            <img
              onError={addDefaultSrc}
              className="h-16 pl-2 w-full"
              src="https://dottotech.com/wp-content/uploads/2020/08/invideo-logo-v2.png"
              alt="Youtube logo"
            />
          </a>
        </div>
        <div className=" relative px-10 w-10/12 ">
          <div className="flex">
            <input
              className="w-1/2 border border-gray-500 p-2 rounded-l-full"
              type="search"
              value={searchValue}
              onFocus={() => {
                setShowSuggestion(true);
              }}
              onChange={(e, value) => {
                setSearcValue(e.target.value);
              }}
            />
            <button
              className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
              onClick={suggationSelectHandler}
            >
              <SearchSVG />
            </button>
          </div>
          {showSuggestion && searchSuggestion && (
            <div className="absolute bg-slate-100 py-2 shadow-lg rounded-lg w-1/2 boder border-gray-100">
              <ul>
                {searchSuggestion.map((value, index) => {
                  return (
                    <li
                      key={value}
                      className=" border border-b-slate-600 p-2 hover:bg-gray-200"
                      id={value}
                      onBlur={() => {
                        setShowSuggestion(false);
                      }}
                      onClick={() => {
                        setShowSuggestion(false);
                        setSearcValue(value);
                      }}
                      name={value}
                    >
                      <Link to={"/search?search=" + value}>
                        <SearchSVG />
                        {value}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className=" px-5">
          <img
            className="h-10 rounded-[100%]"
            src="https://yt3.ggpht.com/yti/AHXOFjVHV_dg4EFV-EAAZfLwvxKKxUU3jmfrksmKAixd=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Youtube logo"
          />
        </div>
      </div>
      <div className="pl-20">
        <ButtonList />
      </div>
    </div>
  );
}

export default Head;
