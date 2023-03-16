import React from "react";
import "./project-14.css";

const Project14 = () => {
  return (
    <div className="project-14">
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div className="grid-container">
        <div className="grid">
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer centerPiece">
            <div className="gridBlock centerBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock">
              <a href="https://greensock.com" target="_blank"></a>
            </div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
        </div>
      </div>

      <h1 className="header-section" style={{ marginTop: 0 }}>
        Final
      </h1>
    </div>
  );
};

export default Project14;
