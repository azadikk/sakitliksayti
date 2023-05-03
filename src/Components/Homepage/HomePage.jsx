import "./HomePage.css";
import './HomePageResponsive.css';
import Company from "./AboutCompany/About";
import Contents from "./Contents/Contents";
import HeaderNavbar from "./Header-Navbar/HeaderNavbar";
import Header_Top from "./Header-top/Headertop";
import Second from "./Page2/SecondPage";
import Third from "./Page3/ThirdPage";
import InstaFeed from "./Page4-instagram-feed/InstaFeed";
import Calculator from "./Calculator/Calculator";
import Page from "./Page4/Page";
import Page_2 from "./Page5/Page";
import Partners from "./Partners/Partners";
import Videos from "./Videos/Videos";
import Prices from "./Qiymetler/Prices";
import Questions from "./Page6-Questions/Questions";
import Questions2 from "./Page6-Questions/Questions2";
import Contact from "./Contact/Contact";
import Map from "./MapArea/Map";
import End from "./EndSection/End";

export default function Home() {

  

  return (
    <div className="Homepage">
      <Header_Top />
      <HeaderNavbar />
      <Contents Button='Qiymətlər'/>
      <Company />
      <Second />
      <Third SubmitButton="Sifariş et"/>
      <InstaFeed />
      <Calculator />
      <Page />
      <Page_2 />
      <Partners />
      <Videos />
      <Prices />
      <Questions />
      <Questions2 SubmitButton="Göndər" />
      <Contact />
      <Map />
      <End />

    </div>
  );
}
