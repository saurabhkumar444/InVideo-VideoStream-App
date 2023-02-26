import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryApi } from "../Utils/ApiGenerator";
import Button from "./Button";

function ButtonList() {
  const [categoryList, SetCategoryList] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await getCategoryApi();
    SetCategoryList(response);
  };
  const buttonClickHandler = async (value) => {};

  return (
    <div className="flex overflow-auto whitespace-nowrap m-2 scrollbar-hide ">
      {categoryList &&
        categoryList.map((value) => {
          return (
            <Link
              key={value.id}
              to={"/search?search=" + value?.snippet?.title}
              className="pl-1"
            >
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
