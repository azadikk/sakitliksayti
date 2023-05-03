import "./End.css";

export default function End() {
  const FooterItems = [
    { id: 1, title: "Endirimlər" },
    { id: 2, title: "Layihələr" },
    { id: 3, title: "Videolar" },
    { id: 4, title: "Qiymətlər" },
  ];

  return (
    <div className="end">
      <nav className="footerNav">
        {FooterItems.map((items) => (
          <li key={items.id} className="items">
            {items.title}
          </li>
        ))}
      </nav>

      <img src="logoEnd.png" />
      <>
        <i id="face" className="bi bi-facebook"></i>
        <i id="insta2" className="bi bi-instagram"></i>
        <i id="linkedin" className="bi bi-linkedin"></i>
        <i id="telegram" className="bi bi-telegram"></i>
        <i id="youtube" className="bi bi-youtube"></i>
      </>
    </div>
  );
}
