import React, { useEffect, useState } from "react";
import { YOUTUBE_CATEGORY_API } from "../Utils/contants";
import Button from "./Button";

function ButtonList() {
  const [categoryList, SetCategoryList] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const data = await fetch(YOUTUBE_CATEGORY_API);
    const json = await data.json();
    // console.log(">>>>>>YOUTUBE_CATEGORY_API>>", json);
    SetCategoryList(json?.items);
  };

  return (
    <div className="flex overflow-auto whitespace-nowrap m-2">
      {categoryList &&
        categoryList.map((value) => {
          return <Button key={value.id} name={value?.snippet?.title} />;
        })}
      {/* <Button name="All" />
      <Button name="Music" />
      <Button name="Coocking" />
      <Button name="Cricket" />
      <Button name="Songs" />
      <Button name="Food" />
      <Button name="Valentine" />
      <Button name="cricket" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" />
      <Button name="Cricket" /> */}
    </div>
  );
}

export default ButtonList;
