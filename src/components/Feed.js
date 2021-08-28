import React from "react";

export default function Feed() {
  return (
    <div className="feedContainer">
      <h4 className="logo">Weather in Uzbekistan</h4>
      <div className="weatherBottom">
        <h2 className="weatherDegree">
          26 <span></span>{" "}
        </h2>
        <div className="weatherInfo">
          <h2 className="weatherCity">London</h2>
          <h4 className="weatherTime">10:36 - Tuesday, 22 Oct ' 19</h4>
        </div>
        <div className="weatherCondition">
          <img
            src="assets/wheatherIcons/sunny.png"
            className="weatherConditionImg"
            alt="weather"
          />
          <h4 className="weatherConditionText">Sunny</h4>
        </div>
      </div>
    </div>
  );
}
