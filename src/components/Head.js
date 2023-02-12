import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/contants";
import { cacheResult, clearSearch } from "../Utils/searchSlice";

function Head() {
  const [searchValue, setSearcValue] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

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
    if (searchValue.length < 2) return clearSearch();
    const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const json = await data.json();
    setSearchSuggestion(json[1]);
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
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
          alt="logo"
        />
        <a href="/">
          <img
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
            type="text"
            value={searchValue}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
            onChange={(e) => setSearcValue(e.target.value)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 shadow-lg rounded-lg w-[36rem] boder border-gray-100">
            <ul>
              {searchSuggestion &&
                searchSuggestion.map((value) => {
                  return (
                    <li
                      className="shadow-sm py-2 hover:bg-gray-100"
                      key={value}
                    >
                      <div
                        className=""
                        onClick={(e) => {
                          {
                            console.log(">>>>>>setSearcValue>>>>", value, e);
                          }
                          // setSearcValue(value);
                        }}
                      >
                        {value}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzTIrXK_AJsi-yi6E9yNamVlhURSjgdMgwn2qqxCepqObqP0EGLoEXSdGwwuzA9k6Cnc&usqp=CAU"
          alt="Youtube logo"
        />
      </div>
    </div>
  );
}

export default Head;
