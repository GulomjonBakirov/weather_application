import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import "./styles/app.css";
import bgImgSunny from "./bg-images/sunnybg.png";
import bgImgCloudy from "./bg-images/cloudybg.png";
import bgImgRainy from "./bg-images/rainybg.jpg";
import { useSelector } from "react-redux";

function App() {
  const { error, loading, data } = useSelector((state) => state.weather);

  return (
    <div className="AppContainer">
      <div
        className="weather"
        style={{
          backgroundImage: `url(${
            data
              ? data.current.condition.text.toLowerCase() === "sunny"
                ? bgImgSunny
                : data.current.condition.text.toLowerCase() === "mist"
                ? bgImgCloudy
                : data.current.condition.text.toLowerCase() === "partly cloudy"
                ? bgImgRainy
                : bgImgSunny
              : "No Data"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat, repeat",
        }}
      >
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
