import "./HeaderNavbar.css";
import './Header-Nav-Resp.css';
import { useEffect, useRef, useState } from "react";

export default function HeaderNavbar() {
  const NavItems = [
    { id: 1, name: "Haqqımızda",},
    { id: 2, name: "Nə üçün biz" },
    { id: 3, name: "Biz necə işləyirik" },
    { id: 4, name: "Endirimlər" },
    { id: 5, name: "Layihələr" },
    { id: 6, name: "Videolar" },
    { id: 7, name: "Qiymətlər" },
  ];

  const [mobile, setMobile] = useState(false);
  const referance = useRef(null);

useEffect(() => {
  const ResizeWindow = () => {
    if (window.innerWidth <= 400) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  window.addEventListener('resize', ResizeWindow)
  return () => window.removeEventListener('resize', ResizeWindow);
},[]);


    const [openedMobile, setOpenedMobile] = useState(false)
    const openMobileMenu = () => {
      setOpenedMobile(!openedMobile)
    }


  return (
    <div className="Navbar" ref={referance}>
      <ul>
        {NavItems.map((items) => (
          <li key={items.id} className="li-a">
            {items.name}
          </li>
        ))}
      </ul>

          {mobile && 
          <div className="mobileNav">
            <img id="hamburgerIcon" src="hamburger.png" onClick={openMobileMenu}/>

            {openedMobile && 
            <div className="mobile_Ul">
                {NavItems.map((mobItems) => (
                  <li key={mobItems.id} className="mobile_Li">
                    {mobItems.name}
                    </li>
                ))}


            </div>}

          </div>}
          

    </div>
  );
}
