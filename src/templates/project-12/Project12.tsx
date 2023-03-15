import React from "react";
import one from "../../assets/12-1.png";
import two from "../../assets/12-2.png";
import three from "../../assets/12-3.png";
import four from "../../assets/12-4.png";
import five from "../../assets/12-5.png";
import "./project-12.css";

const Project12 = () => {
  return (
    <div className="project-12">
      <section>
        <div className="bg"></div>
        <h1>Simple parallax sections</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Hey look, a title</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>They just keep coming</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>So smooth though</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Nice, right?</h1>
      </section>
    </div>
  );
};

export default Project12;
