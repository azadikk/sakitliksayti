import "./Contents.css";

export default function Contents(props) {
  return (
    <div className="content">
      <p className="text" style={{ color: "#393B3D" }}>
        Səs-küy probleminin <br></br>
        effektiv həlli <br></br>
      </p>
      <span id='bir-gunde-menzillerde'style={{ color: "#00A7E1" }}>bir gündə mənzillərdə *</span>

      <p className="text2">
        Öz həyatını yaşa,<br></br>
        qonşuların həyatını deyil
      </p>

      <button className="orderBtn2">{props.Button}</button>
      <button className="subBtn">Sifariş göndər</button>

      <div className="articleBox">
        <p>
          Səs-küy problemlərini <br></br>
          necə həll etmək olar?
        </p>
        <i className="bi bi-fast-forward-btn"></i>
      </div>

      <img className="girl" src="pop-art.png"></img>

      <div className="Bam-art">
        <img id="one" src="./Bamart/1.png"></img>
        <img id="two" src="./Bamart/2.png"></img>
        <img id="three" src="./Bamart/3.png"></img>
        <img id="four" src="./Bamart/4.png"></img>
        <img id="five" src="./Bamart/5.png"></img>
        <img id="six" src="./Bamart/6.png"></img>
        <img id="nida" src="./public/Vector.png"></img>
        <img id="nida2" src="./public/vektor.png"></img>
        <img id="bulud" src="./Bamart/7.png"></img>
        <img id="bulud2" src="./Bamart/8.png"></img>
        <img id="bulud3" src="./Bamart/9.png"></img>
        <img id="bulud4" src="./Bamart/9.png"></img>
        <img id="bulud5" src="./Bamart/9.png"></img>
        <img id="bulud6" src="./Bamart/Vector-3.png"></img>
      </div>
    </div>
  );
}
