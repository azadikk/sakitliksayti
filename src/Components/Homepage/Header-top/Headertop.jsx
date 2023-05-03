import { useEffect, useRef, useState } from "react";
import "./Headertop.css";
import './HeadertopResp.css';

export default function Header_Top() {
  const [language, setLanguage] = useState(false);
  const flagRef = useRef(null);
  const changeText = useRef(null);
  const changeText2 = useRef(null);
  const container = useRef(null);

  const More = () => {
    setLanguage(!language);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (container.current && !container.current.contains(e.target)) {
        setLanguage(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const [tr, setTr] = useState(false);
  const changeTr = () => {
    setTr(!tr);
    if (flagRef.current) {
      flagRef.current.style.width = "20px";
    }
    if (changeText.current) {
      changeText.current.textContent = tr ? "AZ" : "TR";
      flagRef.current.src = tr ? "turkey.png" : "flag.jpg";
    }
  };

  const [en, setEn] = useState(false);
  const changeEn = () => {
    setEn(!en);
    if (flagRef.current) {
      flagRef.current.src = en ? "eng.png" : "flag.jpg";
      flagRef.current.width = "20px";
    }
  };



  return (
    <div className="header-top" ref={container}>
      <img id="frame" src="Frame.png" />
      <img id="telephone" src="telephone.png" />
      <h1 id="number">+994 51 250 73 30</h1>
      <i id="mail" className="bi bi-envelope"></i>
      <h2 id="e-mail">helpdesk@sakitlik.az</h2>
      <img id="flag" src="flag.jpg" ref={flagRef} />
      <i id="chevron" className="bi bi-chevron-down" onClick={More}></i>
      <img id="cinecon" src="cinecon.png" />
      {language && (
        <span className="languageDiv">
          <h1 id="tr" onClick={changeTr} ref={changeText}>
            TR
          </h1>
          <h2 id="en" onClick={changeEn} ref={changeText2}>
            EN
          </h2>
          <h3 id="ru">RU</h3>
        </span>
      )}
    </div>
  );
}
