import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Reel</li>
        <li>Short</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold py-5"> Subscritpion</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>gamming</li>
        <li>comandy</li>
        <li>Moivr</li>
        <li>Reel</li>
      </ul>
      <h1 className="font-bold py-5"> Watch Latter</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>gamming</li>
        <li>comandy</li>
        <li>Moivr</li>
        <li>Reel</li>
      </ul>
    </div>
  );
}

export default SideBar;
