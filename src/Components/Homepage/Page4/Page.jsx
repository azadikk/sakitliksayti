import "./Page.css";

export default function Page() {
  return (
    <div className="fourPage">
      <h1 className="SpecialAndMinimalize">Xüsusi təkliflər və endirimlər</h1>

      <img id="img1" src="tekliflerBG.png" />
      <span className="firstTitles">
        Lorem ipsum <br></br>
        dolor sit
        <h1 className="lorem">
          Lorem ipsum dolor sit amet,<br></br>
          consectetur adipiscing elit.
        </h1>
      </span>

      <img id="img2" src="tekliflerBG-2.jpg" />
      <span className="firstTitles2">
        Lorem ipsum <br></br>
        dolor sit
        <h1 className="lorem2">
          Lorem ipsum dolor sit amet,<br></br>
          consectetur adipiscing elit.
        </h1>
      </span>

      <img id="img3" src="tekliflerBG-3.png" />
      <span className="firstTitles3">
        Lorem ipsum <br></br>
        dolor sit
        <h1 className="lorem3">
          Lorem ipsum dolor sit amet,<br></br>
          consectetur adipiscing elit.
        </h1>
      </span>
      <img id="img3-Repeat" src="tekliflerBG-3.png" />
      <span className="box"></span>
    </div>
  );
}
