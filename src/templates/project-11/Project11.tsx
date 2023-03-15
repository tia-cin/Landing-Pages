import React from "react";
import one from "../../assets/11-1.png";
import two from "../../assets/11-2.jpeg";
import three from "../../assets/11-3.png";
import four from "../../assets/11-4.png";
import five from "../../assets/11-5.png";
import "./project-11.css";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project11: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      "#bg img",
      { opacity: 0, duration: 1 },
      { opacity: 1, duration: 1, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      "#bg img",
      {
        duration: 2,
        opacity: 1,
        y: -200,
        scrollTrigger: {
          toggleActions: "play none reverse none",
          start: "80% 30%",
        },
      },
      {
        duration: 2,
        opacity: 0,
        x: 600,
        ease: Expo.easeInOut,
        scrollTrigger: {
          toggleActions: "play none reverse none",
          start: "30%",
        },
      }
    );
  }, []);
  return (
    <div className="project-11">
      <div className="section" id="section1">
        <div className="contain">
          <div className="hero-text">
            <div className="hero-title">
              <span>START NOW</span>
              <h1>Fugiat esse</h1>
            </div>
            <div>
              <span className="cat">sit cillum aute</span>
              <h3>eiusmod nisi deserunt est</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="section2">
        <div className="contain">
          <div className="description">
            <span className="cat">About Us</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolores ducimus inventore architecto unde voluptates ipsam magni
              dicta illum aliquid quod necessitatibus, labore quibusdam odio.
              Sapiente ipsam ad dolorum odit animi officia maxime dolorem
              aliquid eveniet quidem a, quasi repudiandae consequuntur quod
              exercitationem voluptatem ducimus et tempore? Fugiat quod a magni
              totam esse voluptate quis optio, exercitationem nihil similique
              doloribus soluta tenetur. Facilis, labore doloremque explicabo
              culpa repudiandae neque temporibus exercitationem consectetur modi
              doloribus est dolorem, ullam laudantium voluptatem, dolores
              ducimus expedita sint accusamus voluptates consequatur in tempore
              optio! Alias ab officia corporis iure eveniet exercitationem
              delectus autem odit explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolores ducimus inventore architecto unde voluptates ipsam magni
              dicta illum aliquid quod necessitatibus, labore quibusdam odio.
              Sapiente ipsam ad dolorum odit animi officia maxime dolorem
              aliquid eveniet quidem a, quasi repudiandae consequuntur quod
              exercitationem voluptatem ducimus et tempore? Fugiat quod a magni
              totam esse voluptate quis optio, exercitationem nihil similique
              doloribus soluta tenetur. Facilis, labore doloremque explicabo
              culpa repudiandae neque temporibus exercitationem consectetur modi
              doloribus est dolorem, ullam laudantium voluptatem, dolores
              ducimus expedita sint accusamus voluptates consequatur in tempore
              optio! Alias ab officia corporis iure eveniet exercitationem
              delectus autem odit explicabo!
            </p>
          </div>
        </div>
      </div>

      <div className="section" id="section3">
        <span className="cat margin-bottom mx-40">Gallery</span>
        <div className="contain">
          <div className="image-one">
            <img src={one} alt="model-1" />
          </div>
          <div className="image-two">
            <img src={two} alt="model-2" />
          </div>
          <div className="image-three">
            <img src={three} alt="model-3" />
          </div>
          <div className="image-four">
            <img src={four} alt="model-4" />
          </div>
        </div>
      </div>

      <div id="bg">
        <img src={five} alt="principal-face" />
      </div>
    </div>
  );
};

export default Project11;
