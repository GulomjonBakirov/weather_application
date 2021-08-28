import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import "./styles/app.css";
import bgImg from "./bg-images/sunnybg.png";

function App() {
  return (
    <div className="AppContainer">
      <div
        className="weather"
        style={{
          backgroundImage: `url(${bgImg})`,
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
