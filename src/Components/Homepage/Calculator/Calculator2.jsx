import "./Calculator2.css";

export default function CalculatorTwo() {
  return (
    <div className="calc2">
      <h1 className="rangeTours">Mənzil növləri</h1>
      <span className="check1">
        <input type="checkbox" />
        <h1 className="newBuild">Yeni tikili</h1>
      </span>

      <span className="check2">
        <input type="checkbox" />
        <h1 className="panel">Panel</h1>
      </span>

      <span className="check3">
        <input type="checkbox" />
        <h1 className="kerpic">Kərpic</h1>
      </span>

      <span className="check4">
        <input type="checkbox" />
        <h1 className="oneLife">Fərdi yaşayış</h1>
      </span>

      <h3>İzolyasiya olunacaq səthlər</h3>

      {/* TWO CHECKS */}

      <span className="check5">
        <input type="checkbox" />
        <h1 className="newBuild">Divan</h1>
      </span>

      <span className="check6">
        <input type="checkbox" />
        <h1 className="panel">Tavan</h1>
      </span>

      <span className="check7">
        <input type="checkbox" />
        <h1 className="kerpic">Arakəsmə</h1>
      </span>

      <span className="check8">
        <input type="checkbox" />
        <h1 className="oneLife">Döşəmə</h1>
      </span>

      <span className="check9">
        <input type="checkbox" />
        <h1 className="oneLife">Digər</h1>
      </span>
    </div>
  );
}
