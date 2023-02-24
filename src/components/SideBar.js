import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDefaultSrc, SideBarList } from "../Utils/commonValue";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="px-2 w-20   ">
      <ul className=" ">
        {SideBarList.map((value) => {
          return (
            <div key={value?.id} className="">
              <li className=" justify-center items-center">
                <Link
                  to={
                    value?.id === "home"
                      ? "/"
                      : "/search?search=" + value?.title
                  }
                >
                  <img
                    src={value?.src}
                    onError={addDefaultSrc}
                    className="h-7 mt-5 pl-3"
                    alt="Home"
                  />
                  <p>{value?.title}</p>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
