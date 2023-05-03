import "./secondPage.css";

export default function Second() {
  return (
    <div className="secondPage">
      <h1>Nə üçün biz?</h1>
      <p>
        Biz işə yaramayan və ya məna kəsb etməyən şeyləri satmadığımız üçün
        seçildik. <br></br>
        Biz özümüz üçün aşağıdakı materialları və həll yollarını müəyyən etdik:
      </p>

      <div className="layouts">
        <span className="lay1">
          <img id="finger" src="barmaq.png" />
          <h5 id="text">
            Sadə və istifadəsi asan, hətta <br></br>
            "nənələr" üçün də
          </h5>
        </span>

        <span className="lay2">
          <img id="finger" src="audio.png" />
          <h5 id="text">
            Sadə və istifadəsi asan, hətta <br></br>
            "nənələr" üçün də
          </h5>
        </span>

        <span className="lay3">
          <img id="finger" src="pul.png" />
          <h5 id="text">
            Sadə və istifadəsi asan, hətta <br></br>
            "nənələr" üçün də
          </h5>
        </span>

        <span className="lay4">
          <img id="finger" src="sened.png" />
          <h5 id="text6">
            Sadə və istifadəsi asan, hətta <br></br>
            "nənələr" üçün də
          </h5>
        </span>
      </div>
    </div>
  );
}
