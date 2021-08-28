import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function Rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarSearch">
        <input className="search" />
        <SearchIcon className="searchIcon" />
      </div>
      <ul className="rightbarList">
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
        <li className="rightbarItem">Tashkent</li>
      </ul>
      <hr />
      <h4>Weather Details</h4>
      <div className="details">
        <div className="detail">
          <h4>Cloudy</h4>
          <span>12%</span>
        </div>
        <div className="detail">
          <h4>Humidity</h4>
          <span>12%</span>
        </div>
        <div className="detail">
          <h4>Wind</h4>
          <span>12%</span>
        </div>
        <div className="detail">
          <h4>Rain</h4>
          <span>12%</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
