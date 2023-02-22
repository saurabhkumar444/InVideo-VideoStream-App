import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { youtubeSearchApi } from "../Utils/ApiGenerator";
import { cacheResult, clearSearch } from "../Utils/searchSlice";
import { addDefaultSrc } from "../Utils/commonValue";
import SearchResultContainer from "./SearchResult/SearchResultContainer";
import { Link, useNavigate } from "react-router-dom";
import ButtonList from "./ButtonList";

function Head() {
  const [searchValue, setSearcValue] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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
    setShowSuggestion(true);
    const data = await fetch(youtubeSearchApi + searchValue);
    const json = await data.json();
    setSearchSuggestion(json[1]);
    // setShowSuggestion(true);
    // update in redux
    dispatch(
      cacheResult({
        [searchValue]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const suggationSelectHandler = useCallback(async (value) => {
    // const response = await youtubeGetSearchValueAPI(value);
    // navigate("/search", { replace: true });
  }, []);

  return (
    <div className="">
      <div className="grid grid-flow-col p-5 shadow-lg w-full  items-center ">
        <div className="flex col-span-1  items-center">
          <img
            onError={addDefaultSrc}
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            alt="logo"
          />
          <a href="/">
            <img
              onError={addDefaultSrc}
              className="h-16 pl-2"
              src="data:image/png;base64,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"
              alt="Youtube logo"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
            <input
              className="w-1/2 border border-gray-500 p-2 rounded-l-full"
              type="search"
              value={searchValue}
              onFocus={() => {
                setShowSuggestion(true);
              }}
              onChange={(e) => setSearcValue(e.target.value)}
            />
            <button
              className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
              onClick={() => {
                setShowSuggestion(false);
                setSearcValue(searchValue);
              }}
            >
              Search
            </button>
            {showSuggestion && searchSuggestion && (
              <div className="absolute bg-slate-100 py-2 shadow-lg rounded-lg w-1/2 boder border-gray-100">
                <ul>
                  {searchSuggestion.map((value, index) => {
                    return (
                      <li
                        key={value}
                        className=" border border-b-slate-600 p-2 hover:bg-gray-500"
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
                        <Link to={"/search?search=" + value}>{value}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzTIrXK_AJsi-yi6E9yNamVlhURSjgdMgwn2qqxCepqObqP0EGLoEXSdGwwuzA9k6Cnc&usqp=CAU"
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
