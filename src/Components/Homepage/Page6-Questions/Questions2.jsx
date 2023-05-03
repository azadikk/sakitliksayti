import "./Questions2.css";

export default function Questions2(props) {

  return (
    <div className="questions2">
      <img src="questions2bg.png" />
      <img src="videosPageHouseBG.png" />

      <h1 className="suallarinizvar">Suallarınız var?</h1>
      <p className="formudoldurun">
        Formu doldurun, <br />
        Yaxın zamanda sizinlə əlaqə saxlayacağıq.
      </p>

      <section className="loginBox">
        <input id="nameSurname" type="text" placeholder="Adınız və Soyadınız" />
        <input id="yourMail" type="email" placeholder="Email ünvanını" />
        <input id="yourTelephone" type="tel" placeholder="Əlaqə nömrəsi" />
        <textarea id="yourMessage" placeholder="Mesajınız" />
      </section>

      <button className="subBtn">{props.SubmitButton}</button>

    </div>
  );
}
