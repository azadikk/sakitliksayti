import "./Partners.css";

export default function Partners() {
  return (
    <div className="partners">
      <h1
        className="partner"
        style={{
          borderBottom: "3px solid #00A7E1",
          position: "absolute",
          top: "1rem",
          backgroundColor: "transparent",
          fontSize: "30px",
        }}
      >
        Partnyorlar
      </h1>

      <div className="box1">
        <img id="cinecon1" src="cinecon.png" />
      </div>
      <div className="box2"></div>
      <div className="box3">
        <img id="cinecon2" src="cinecon.png" />
      </div>
    </div>
  );
}
