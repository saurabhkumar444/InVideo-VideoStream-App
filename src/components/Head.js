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
      <div className="grid grid-flow-col p-5 shadow-lg w-full ">
        <div className="flex col-span-1">
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
              className="h-8 mx-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t30_3ezkWsNAEOtkI-v_Wd11so1vYPCyMUvvizyEoEBpHXDQAFy2eqY607hoV3P8gPI&usqp=CAU"
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
      <ButtonList />
    </div>
  );
}

export default Head;
