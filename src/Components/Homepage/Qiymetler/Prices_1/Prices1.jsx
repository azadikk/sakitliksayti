import "./Prices1.css";

export default function Prices1(props) {
  return (
    <div className="pricesBox">
      <img id="priceGirl" src="priceGirl.png" />
      <h1 className="title1">
        Döşəmənin səs və <br></br>
        vibro izolyasiyası
        {props.title1}
      </h1>

      <h2 className="title2">
        61,90 AZN/m2 <br></br>
        başlayaraq
        {props.title2}
      </h2>

      <h3 className="title3">
        <i className="bi bi-fire"></i>
        Снижение воздушного шума в 2 раза
        {props.title3}
      </h3>

      <h4 className="title4">
        Устранение ударного шума от<br></br>
        топота, падения предметов
        <i className="bi bi-fire"></i>
        {props.title4}
      </h4>

      <h5 className="title5">
        Суммарная звукоизоляция до 60 дБ
        <i className="bi bi-fire"></i>
        {props.title5}
      </h5>

      <h6 className="title6">
        Толщина от 2,5 см
        <i className="bi bi-fire"></i>
        {props.title6}
      </h6>

      <button className="subBtn">
        Sifariş et
        {props.SubmitButton}
      </button>
    </div>
  );
}
