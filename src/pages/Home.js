import { ImageEffectCanvas } from "../components/ImageEffectCanvas";
import homeImg1 from "../assets/images/01.jpg";
import homeImg2 from "../assets/images/02.jpg";
import homeImg3 from "../assets/images/03.jpg";
import homeImg4 from "../assets/images/04.jpg";
import homeImg5 from "../assets/images/05.jpg";
import { ActionBtn } from "../components/ActionBtn";
import "./pages.css";

export function Home() {
  return (
    <div className="home-page">
      <div className="header-container">
        <h1 className="welcome-to">Welcome to</h1>
        <h1 className="gogetterz">
          <span className="letter-g">g</span>o<span className="letter-g">g</span>
          etterz
        </h1>
      </div>
      <ImageEffectCanvas />
      <div className="img-stack-container">
        <img src={homeImg1} className="home-img img-1" />
        <img src={homeImg2} className="home-img img-2" />
        <img src={homeImg3} className="home-img img-3" />
        <img src={homeImg4} className="home-img img-4" />
        <img src={homeImg5} className="home-img img-5" />
      </div>
      <ActionBtn />
    </div>
  );
}
