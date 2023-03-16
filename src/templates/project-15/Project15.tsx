import React from "react";
import top from "../../assets/15-1.png";
import bottom from "../../assets/15-2.png";

const Project15 = () => {
  return (
    <div>
      <h1 className="header-section">Scroll to see what it's made of</h1>

      <section className="glock">
        <img src={top} className="barrel piece" alt="barrel" />
        <div>
          <img src={top} className="piece" alt="spring" />
          <img src={bottom} className="piece" alt="spring" />
        </div>
        <div>
          <img src={top} className="piece" alt="spring" />
          <img src={bottom} className="piece" alt="spring" />
        </div>
        <img src={bottom} className="base piece" alt="base" />
      </section>

      <h1 className="header-section">Boom.</h1>
    </div>
  );
};

export default Project15;
