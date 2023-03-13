import React from "react";
import coca from "../../assets/coca-cola-bottle.png";
import cocaLight from "../../assets/coca-cola-light-bottle.png";
import "./project-5.css";
import { BsList, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { gsap, Expo, Circ } from "gsap";

const Project5 = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 1, x: -40, opacity: 1, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".stripe",
      { duration: 2.4 },
      { duration: 2.5, delay: 0, width: "100%", ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".coke",
      { duration: 1, opacity: 0, y: -1000 },
      { duration: 1, delay: 1.4, opacity: 1, y: 0, ease: Circ.easeInOut }
    );

    gsap.fromTo(
      ".header",
      { duration: 2, x: -600 },
      { duration: 2, delay: 1.8, x: 0, ease: Circ.easeInOut }
    );

    gsap.fromTo(
      ".text h2",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 3.3, opacity: 1, y: 40, ease: Circ.easeInOut }
    );

    gsap.fromTo(
      ".text .para",
      { duration: 1.2, opacity: 0, y: 40 },
      { duration: 1.2, delay: 3.9, opacity: 1, y: 0, ease: Circ.easeInOut }
    );

    gsap.fromTo(
      ".small-coke",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 4.5, opacity: 1, y: 40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 2, opacity: 0, x: -40 },
      { duration: 2, delay: 5, opacity: 1, x: 0, ease: Circ.easeInOut }
    );
  }, []);

  return (
    <div className="project-5">
      <nav className="navbar">
        <div className="logo">cococola</div>
        <div className="categories">
          <ul>
            <li>originals</li>
            <li>light</li>
          </ul>
        </div>
        <div className="menu">
          <BsList />
        </div>
      </nav>

      <div className="stripe"></div>

      <div className="coke">
        <img src={coca} className="coke-bottle" alt="coca-cola-bottle" />
      </div>

      <div className="small-coke">
        <li>
          <img src={coca} alt="coca-cola-bottle" />
        </li>
        <li>
          <img src={cocaLight} alt="coca-cola-light-bottle" />
        </li>
      </div>

      <div className="text">
        <h1>
          <span className="header">start from</span>
        </h1>
        <h2>Coke</h2>
        <p>
          <span className="para">
            All right reserved coco cola company based in georgia.
          </span>
        </p>
      </div>

      <div className="media">
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project5;
