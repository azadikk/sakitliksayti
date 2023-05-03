import { useEffect, useState, useTransition } from "react";
import "./Videos.css";
import axios from "axios";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=3&key=AIzaSyA9gkthu4VcxNOKAFumozbGGqwcWHhRtl4"
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [radio, setRadio] = useState(false);

  const handleChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <div className="Videos">
      <input
        id="radio1"
        type="radio"
        onChange={handleChange}
        checked={radio === "option1"}
        value="option1"
      />
      <input
        id="radio2"
        type="radio"
        onChange={handleChange}
        checked={radio === "option2"}
        value="option2"
      />
      <input
        id="radio3"
        type="radio"
        onChange={handleChange}
        checked={radio === "option3"}
        value="option3"
      />

      <h1 id='video-lar'
        style={{
          fontSize: "45px",
          color: 'black',
          borderBottom: "3px solid #00A7E1",
          position: "absolute",
          top: "5rem",
          zIndex: "5",
        }}
      >
        Videolar
      </h1>
      <img id="houseBG" src="videosPageHouseBG.png" />
      <img id="transparentBG" src="videoPageTransparentBG.png" />
      <div className="Videos2">
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
            className="my-videos"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
