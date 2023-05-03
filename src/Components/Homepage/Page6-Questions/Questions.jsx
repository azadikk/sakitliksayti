import { useRef, useState } from "react";
import "./Questions.css";

export default function Questions() {
  const [content, setContent] = useState(false);
  const BoxReferance = useRef(null);
  const titleReferance = useRef(null);
  const colorRef = useRef(null);
  const plusBtn = useRef(null);
  const minusBtn = useRef(null);
  const handleClick = () => {
    setContent(!content);
    if (BoxReferance.current){
      BoxReferance.current.style.height = content ? "100px" : "";
    }
    if (titleReferance.current) {
      titleReferance.current.style.display = content ? "none" : "";
    }
    if (colorRef.current) {
      colorRef.current.style.color = content ? "#282828" : "";
    }
    if (plusBtn.current) {
      plusBtn.current.style.display = content ? "flex" : "none";
    }
    if (minusBtn.current) {
      minusBtn.current.style.display = content ? "none" : "flex";
    }
  };

  const [warn, setWarn] = useState(false);
  const alertButton = () => {
    setWarn(!warn)
    alert('Burada göstəriləcək heçnə yoxdur!');
  }

  return (
    <div className="questions">
      <h1
        className="prices"
        style={{
          fontSize: "40px",
          color: "#393B3D",
          borderBottom: "3px solid #00A7E1",
          position: "absolute",
          top: "-5rem",
        }}
      >
        Tez-tez verilən suallar
      </h1>

      <section className="box-Question" ref={BoxReferance}>
        <h1 className="titleLorem" ref={colorRef}>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
        </h1>
        <h2 className="titleLorem2" ref={titleReferance}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc felis
          ultrices vitae iaculis at <br />
          eu. Tincidunt pellentesque lobortis enim morbi nulla tortor tristique
          in. Massa semper quis <br />
          imperdiet cursus egestas. Nulla eget purus et phasellus vehicula
          feugiat. Quam dictumst <br />
          diam id tincidunt est.
        </h2>
        <button className="more" onClick={handleClick} ref={plusBtn}>
          +
        </button>
        <button className="more" onClick={handleClick} ref={minusBtn}>
          -
        </button>
      </section>

      <section className="box-Question">
        <h1 className="titleLorem3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <button className="more2" onClick={alertButton}>+</button>
      </section>

      <section className="box-Question">
        <h1 className="titleLorem4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <button className="more3"onClick={alertButton}>+</button>
      </section>

      <section className="box-Question">
        <h1 className="titleLorem5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <button className="more4"onClick={alertButton}>+</button>
      </section>
    </div>
  );
}
