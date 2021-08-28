import React, { useState } from "react";
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
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="rightbarContainer">
      <div className="rightbarSearch">
        <input
          type="text"
          className="search"
          placeholder="Search Your Location"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <SearchIcon className="searchIcon" />
      </div>
      <ul className="rightbarList">
        {regions
          .filter((region) => {
            if (searchItem == "") {
              return region;
            } else if (
              region.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return region;
            }
          })
          .map((region, index) => (
            <li key={index} className="rightbarItem">
              {region.name}
            </li>
          ))}
      </ul>
      <hr />
      <h3>Weather Details</h3>
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
