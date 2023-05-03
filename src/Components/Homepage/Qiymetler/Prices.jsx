import "./Prices.css";
import Prices1 from "./Prices_1/Prices1";
import Prices2 from "./Prices_2/Prices2";
import Prices3 from "./Prices_3/Prices3";
import Prices4 from "./Prices_4/Prices4";
import '../Calculator/CalculatorNotes.jsx';

export default function Prices() {
  return (
    <div className="MainPricesPage">
      <h1
        className="prices"
        style={{
          fontSize: "40px",
          color: "#393B3D",
          borderBottom: "3px solid #00A7E1",
          position: "absolute",
          top: "2.5rem",
        }}
      >
        Qiymətlər
      </h1>

      <Prices1 />
      <Prices2
        title1="Tavanın səs izolyasiyası"
        title2="92,90 AZN/m2 başlayaraq"
        title3="Снижение воздушного шума в 2 раза"
        title4="Устранение ударного шума от топота, падения предметов"
        title5="Суммарная звукоизоляция до 60 дБ"
        title6="Толщина от 2,5 см"
        SubmitButton="Sifariş et"
      />

      <Prices3
        title1="Divarın səs izolyasiyası"
        title2="47,90 AZN/m2 başlayaraq"
        title3="Снижение воздушного шума в 2 раза"
        title4="Устранение ударного шума от топота, падения предметов"
        title5="Суммарная звукоизоляция до 60 дБ"
        title6="Толщина от 2,5 см"
        SubmitButton="Sifariş et"
      />
      <Prices4
        title1="Arakəsmənin səs izolyasiyası"
        title2="97,90 AZN/m2 başlayaraq"
        title3="Снижение воздушного шума в 2 раза"
        title4="Устранение ударного шума от топота, падения предметов"
        title5="Суммарная звукоизоляция до 60 дБ"
        title6="Толщина от 2,5 см"
        SubmitButton="Sifariş et"
      />
      
    </div>
  );
}
