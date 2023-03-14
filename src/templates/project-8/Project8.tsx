import React from "react";
import { BsCart, BsList } from "react-icons/bs";
import picture from "../../assets/picture.png";
import "./project-8.css";
import { gsap, Power2, Expo } from "gsap";

const Project8: React.FC = () => {
  React.useEffect(() => {
    gsap.to(".one", {
      duration: 2,
      delay: 0,
      height: "100%",
      ease: Power2.easeInOut,
    });

    gsap.to(".two", {
      duration: 2,
      delay: 0.4,
      height: "100%",
      ease: Power2.easeInOut,
    });

    gsap.to(".three", {
      duration: 2,
      delay: 0.8,
      height: "100%",
      ease: Power2.easeInOut,
    });

    gsap.fromTo(
      ".navbar",
      { duration: 2, delay: 1.3, opacity: 0, y: -20 },
      { duration: 2, delay: 1.3, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      "button",
      { duration: 2, delay: 4.3, opacity: 0, y: 40 },
      { duration: 2, delay: 4.3, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".scrolldown",
      { duration: 2, delay: 6, opacity: 0, y: 40 },
      { duration: 2, delay: 6, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".num",
      { duration: 1.4, delay: 4.5, opacity: 0, y: -20 },
      { duration: 1.4, delay: 4.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 2, delay: 5, opacity: 0, y: 40 },
      { duration: 2, delay: 5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-8">
      <div className="stripes">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>

      <nav className="navbar">
        <div className="logo">bd</div>
        <div className="categories">
          <ul>
            <li>male</li>
            <li>female</li>
            <li>unisex</li>
            <li>kids</li>
          </ul>
        </div>
        <div className="menu">
          <BsList />
        </div>
        <div className="cart">
          <BsCart />
        </div>
      </nav>

      <div className="img">
        <img src={picture} alt="woman-pose" />
      </div>

      <div className="title">
        <span>
          <label>lorem</label>ipsum&nbsp;
        </span>
      </div>

      <div className="sub-title">
        Amet nostrud sunt ipsum reprehenderit reprehenderit fugiat in quis culpa
        mollit.
      </div>

      <div className="num">07</div>

      <button>Start Now</button>

      <div className="scrolldown">scroll</div>

      <div className="media">
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Project8;
