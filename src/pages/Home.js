// import { ImageEffectCanvas } from "../components/ImageEffectCanvas";
import homeImg1 from "../assets/images/home-images/01.jpg";
import homeImg2 from "../assets/images/home-images/02.jpg";
import homeImg3 from "../assets/images/home-images/03.jpg";
import homeImg4 from "../assets/images/home-images/04.jpg";
import homeImg5 from "../assets/images/home-images/05.jpg";
import homeImg6 from "../assets/images/home-images/06.jpg";
import homeImg7 from "../assets/images/home-images/07.jpg";
import homeImg8 from "../assets/images/home-images/08.jpg";
import { ActionBtn } from "../components/ActionBtn";
import { ThreeFiberCanvas } from "../components/ThreeFiberCanvas";

export function Home() {
  return (
    <>
      <ThreeFiberCanvas />
      <div className="header-container">
        <h1 className="welcome-to">Welcome to test #1</h1>
        <h1 className="gogetterz">
          <span className="letter-g">g</span>o<span className="letter-g">g</span>
          etterz
        </h1>
      </div>

      <div className="img-stack-container">
        <img src={homeImg1} className="home-img img-1" alt="home-01" />
        <img src={homeImg2} className="home-img img-2" alt="home-02" />
        <img src={homeImg3} className="home-img img-3" alt="home-03" />
        <img src={homeImg4} className="home-img img-4" alt="home-04" />
        <img src={homeImg5} className="home-img img-5" alt="home-05" />
        <img src={homeImg6} className="home-img img-5" alt="home-06" />
        <img src={homeImg7} className="home-img img-5" alt="home-07" />
        <img src={homeImg8} className="home-img img-5" alt="home-08" />
      </div>
      <div className="header-container">
        <h1 className="welcome-to">Welcome to</h1>
        <h1 className="gogetterz">
          <span className="letter-g">g</span>o<span className="letter-g">g</span>
          etterz
        </h1>
      </div>
      <ActionBtn />
    </>
  );
}
