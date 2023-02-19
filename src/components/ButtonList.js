import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_CATEGORY_API } from "../Utils/ApiGenerator";
import Button from "./Button";

function ButtonList() {
  const [categoryList, SetCategoryList] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await YOUTUBE_CATEGORY_API();
    SetCategoryList(response);
  };
  const buttonClickHandler = async (value) => {
    console.log(">>>>>>value>", value);
  };

  return (
    <div className="flex overflow-auto whitespace-nowrap m-2 scrollbar-hide shadow-sm">
      {categoryList &&
        categoryList.map((value) => {
          return (
            <Link key={value.id} to={"/search?search=" + value?.snippet?.title}>
              <Button
                name={value?.snippet?.title}
                onClick={() => buttonClickHandler(value)}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default ButtonList;
