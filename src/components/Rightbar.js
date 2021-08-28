import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../store/weatherAction";
import { regions } from "../regionsData";

export default function Rightbar() {
  const [searchItem, setSearchItem] = useState("");
  const [city, setCity] = useState("Tashkent");
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.weather);
  console.log(data);
  useEffect(() => {
    dispatch(getWeatherData(city));
  }, [city, dispatch]);

  const setValue = (e) => {
    console.log(e.target.innerText);
    setCity(e.target.innerText);
  };
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
            if (searchItem === "") {
              return region;
            } else if (
              region.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return region;
            }
          })
          .map((region, index) => (
            <li key={index} className="rightbarItem" onClick={setValue}>
              {region.name}
            </li>
          ))}
      </ul>
      <hr />
      <h3>Weather Details</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="details">
          <div className="detail">
            <h4>Cloudy</h4>
            <span>{data ? data.current.cloud : "Some Error in Server"}%</span>
          </div>
          <div className="detail">
            <h4>Humidity</h4>
            <span>
              {data ? data.current.humidity : "Some Error in Server"}%
            </span>
          </div>
          <div className="detail">
            <h4>Wind</h4>
            <span>
              {data ? data.current.wind_mph : "Some Error in Server"}mph
            </span>
          </div>
          <div className="detail">
            <h4>Gust</h4>
            <span>
              {data ? data.current.gust_mph : "Some Error in Server"}mph
            </span>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}
