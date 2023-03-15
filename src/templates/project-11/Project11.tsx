import React from "react";
import one from "../../assets/11-1.png";
import two from "../../assets/11-2.jpeg";
import three from "../../assets/11-3.png";
import four from "../../assets/11-4.png";
import five from "../../assets/11-5.png";
import "./project-11.css";

const Project11 = () => {
  return (
    <div className="project-11">
      <div className="section" id="section1">
        <div className="contain">
          <div className="hero-text">
            <div className="hero-title">
              <span>START NOW</span>
              <h1>Lorem Tempor</h1>
            </div>
            <div>
              <span className="cat">Cupidatat </span>
              <h3>Nostrud cupidatat et deserunt</h3>
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
        <img src={five} alt="model-5" />
      </div>
    </div>
  );
};

export default Project11;
