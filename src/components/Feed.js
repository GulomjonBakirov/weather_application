import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Feed() {
  const { error, loading, data } = useSelector((state) => state.weather);
  const dateString = new Date(data && data.current.last_updated).toString();
  return (
    <div className="feedContainer">
      <h4 className="logo">Weather in Uzbekistan</h4>
      {loading ? (
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Loading....
        </h1>
      ) : (
        <div className="weatherBottom">
          <h2 className="weatherDegree">
            {data && data.current.temp_c} <span></span>{" "}
          </h2>
          <div className="weatherInfo">
            <h2 className="weatherCity">{data && data.location.name}</h2>
            <h4 className="weatherTime">{`${data && dateString}`}</h4>
          </div>
          <div className="weatherCondition">
            <img
              src={
                data
                  ? data.current.condition.text.toLowerCase() === "sunny"
                    ? "assets/wheatherIcons/sunny.png"
                    : data.current.condition.text.toLowerCase() === "mist"
                    ? "assets/wheatherIcons/smok.png"
                    : data.current.condition.text.toLowerCase() ===
                      "partly cloudy"
                    ? "assets/wheatherIcons/cloudy.png"
                    : "assets/wheatherIcons/sunny.png"
                  : ""
              }
              className="weatherConditionImg"
              alt="weather"
            />
            <h4 className="weatherConditionText">
              {data && data.current.condition.text}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
