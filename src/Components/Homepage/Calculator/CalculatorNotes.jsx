import "./CalculatorNotes.css";
export default function Notes(props) {
  return (
    <div className="CalcNotes">
      <h1 className="notes">Qeydlər</h1>
      <textarea></textarea>

      <h2 className="telInfo">Əlaqə məlumatları</h2>

      <input id="tel" type="tel" placeholder="Telefon" />
      <input id="email" type="email" placeholder="Email" />

      <button className="orderBtn2">Hesabla {props.Button}</button>
    </div>
  );
}
