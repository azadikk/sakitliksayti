import "./Prices4.css";

export default function Prices4(props) {
  return (
    <div className="pricesBox4">
      <h1 className="title1">{props.title1}</h1>
      <h2 className="title2">{props.title2}</h2>
      <h3 className="title3">
        <i className="bi bi-fire"></i>
        {props.title3}
      </h3>
      <h4 className="title4">
        <i className="bi bi-fire"></i>
        {props.title4}
      </h4>
      <h5 className="title5">
        <i className="bi bi-fire"></i>
        {props.title5}
      </h5>
      <h6 className="title6">
        <i className="bi bi-fire"></i>
        {props.title6}
      </h6>

      <button className="subBtn">{props.SubmitButton}</button>
    </div>
  );
}
