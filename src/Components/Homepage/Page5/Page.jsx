import { useState } from "react";
import "./Page.css";

export default function Page_2() {
  const [image, setImage] = useState(0);

  const Image1 = "PageBackg";
  const Image2 = "PageBackg2";
  const HandleNext = () => {
    if (image === 0) {
      setImage(1);
    } else {
      setImage(1);
    }
  };
  const HandlePrev = () => {
    if (image === 1) {
      setImage(0);
    } else {
      setImage(0);
    }
  };

  return (
    <div className="fivePage">
      <img id="bgPage" src="bgPage4.png" />
      <img
        alt="Baglanti Sorunu"
        id={image === 0 ? Image1 : Image2}
        src={image === 0 ? "page4BG-2.jpg" : "bina.jpg"}
      />
      <button id="next" onClick={HandleNext} disabled={image === 1}>
        <i className="bi bi-arrow-right-circle"></i>
      </button>
      <button id="prev" onClick={HandlePrev}>
        <i className="bi bi-arrow-right-circle"></i>
      </button>

      <h6 className="layiheNum">Layihə nümunələri</h6>
      <h6 className="titleTwo">г. Зеленоград, ЖК Мелодия Леса, д.1</h6>

      <p className="texting">
        <strong>Проблема:</strong>
        <br></br>
        <br></br>В феврале 2018 года в нашу компанию обратился клиент с
        проблемами <br></br>
        посторонних шумов, которые проникали из квартиры соседа за стеной.
      </p>

      <p className="texting2">
        <strong>Отзыв клиента о работе Шумовнет:</strong>
        <br></br>
        <br></br>
        Благодарим компанию Шумовнет за решение нашей проблемы, связанной с{" "}
        <br></br>
        громкими шумами от соседа. В какой-то момент нам казалось, что мы зря{" "}
        <br></br>
        потратили деньги, но специалисты компании довели дело до конца, для нас{" "}
        <br></br>
        это самый высокий показатель в плане отношения с клиентами, большое{" "}
        <br></br>
        спасибо.
      </p>
    </div>
  );
}
