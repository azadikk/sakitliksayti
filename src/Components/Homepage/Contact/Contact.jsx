import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <img id="contactBackg" src="contactBg.png" />
      <section className="telBox">
        <img src="contactIcon.png" />
        <i id="tele" className="bi bi-telephone-inbound"></i>
        <h1 className="titleTel">Telefon</h1>
        <h2 className="titleText">+994 51 250 73 30</h2>
      </section>
      <section className="mailBox">
        <img src="contactIcon.png" />
        <i id="emaili" className="bi bi-envelope-at"></i>
        <h1 className="titleMail">Email</h1>
        <h2 className="titleText2">helpdesk@sakitlik.az</h2>
      </section>
      <section className="adressBox">
        <img src="contactIcon.png" />
        <img id="nav" src="nav.png" />
        <h1 className="titleAdress">Ünvan</h1>
        <h2 className="titleText3">
          61 Mirzə Mansur küç.,
          <br />
          Bakı, Azərbaycan
        </h2>
      </section>
    </div>
  );
}
