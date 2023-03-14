import React from "react";
import { BsList, BsSearch, BsArrowUp, BsArrowDown } from "react-icons/bs";
import model from "../../assets/model-vacation.png";
import vacation from "../../assets/vacation.png";
import "./project-10.css";

const Project10 = () => {
  return (
    <div className="project-10">
      <div className="bg"></div>
      <nav className="navbar">
        <div className="logo">Summer</div>
        <div className="menu-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
          </ul>
        </div>
        <div className="menu">
          <BsList />
        </div>
        <div className="search">
          <BsSearch />
        </div>
      </nav>
      <div className="media">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <div className="img">
          <img src={model} alt="model-on-the-beach" />
        </div>
        <div className="block"></div>
      </div>
      <div className="text">
        <h1>
          <span className="text-bar">
            Breathe in <label> the sea</label>
          </span>
        </h1>
        <p>
          <span className="text-bar">get the summer body</span>
        </p>
      </div>
      <div className="bottomnav">
        <div className="next">up next</div>

        <div className="nav">
          <ul>
            <li>
              <BsArrowUp />
            </li>
            <li>
              <BsArrowDown />
            </li>
          </ul>
          <div className="bottomnav-img">
            <img src={vacation} alt="summer-beach" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project10;
