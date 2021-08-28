import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const regions = [
  {
    name: "Tashkent",
  },
  {
    name: "Jizzakh",
  },
  {
    name: "Andijan",
  },
  {
    name: "Samarkand",
  },
  {
    name: "Surkhandaryo",
  },

  {
    name: "Namangan",
  },
  {
    name: "Nukus",
  },
  {
    name: "Khiva",
  },
  {
    name: "Navoiy",
  },

  {
    name: "Bukhara",
  },
  {
    name: "Denov",
  },
  {
    name: "Qarshi",
  },
];

export default function Rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarSearch">
        <input className="search" placeholder="Search Your Location" />
        <SearchIcon className="searchIcon" />
      </div>
      <ul className="rightbarList">
        {regions.map((region, index) => (
          <li key={index} className="rightbarItem">
            {region.name}
          </li>
        ))}
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
