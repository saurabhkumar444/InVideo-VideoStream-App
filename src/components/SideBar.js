import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDefaultSrc, SideBarList } from "../Utils/commonValue";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="px-5 shadow-lg w-27  ">
      <ul className="">
        {SideBarList.map((value) => {
          return value?.title?.length === 0 ? (
            <div key={value?.id} className="w-[100%] h-[2px] bg-gray-100"></div>
          ) : (
            <li key={value?.id} className=" justify-center ">
              <Link
                to={
                  value?.id === "home" ? "/" : "/search?search=" + value?.title
                }
              >
                <img
                  src={value?.src}
                  onError={addDefaultSrc}
                  className="h-7 mt-5 pl-3"
                  alt="Home"
                />
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
