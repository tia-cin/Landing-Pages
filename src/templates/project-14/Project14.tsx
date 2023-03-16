import React from "react";
import "./project-14.css";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project14: React.FC = () => {
  const colors = [
    "#ebefe3",
    "#c9f2c7",
    "#aceca1",
    "#96be8c",
    "#629460",
    "#243119",
  ];
  React.useEffect(() => {
    const container = document.querySelector(".slides"),
      slides = gsap.utils.toArray(".slide"),
      getRatio = (el: any) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

    slides.forEach((slide: any, i) => {
      const bg = slide.querySelector(".background"),
        content = slide.querySelector(".content"),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

      tl.fromTo(
        bg,
        { y: () => (i ? -window.innerHeight * getRatio(slide) : 0) },
        { y: () => window.innerHeight * (1 - getRatio(slide)), ease: "none" }
      );
      tl.fromTo(
        content,
        { y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0) },
        { y: () => window.innerHeight * getRatio(slide) * 2, ease: "none" },
        0
      );
    });
  }, []);
  return (
    <div className="project-14">
      <section className="ends">Start</section>
      <section className="slides">
        <ul className="list">
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[0] }}
            ></div>
            <div className="content"> 1</div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[1] }}
            ></div>
            <div className="content"> 2</div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[2] }}
            ></div>
            <div className="content"> 3</div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[3] }}
            ></div>
            <div className="content"> 4</div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[4] }}
            ></div>
            <div className="content"> 5</div>
          </li>
          <li className="slide">
            <div
              className="background"
              style={{ backgroundColor: colors[5] }}
            ></div>
            <div className="content"> 6</div>
          </li>
        </ul>
      </section>
      <section className="ends">End</section>
    </div>
  );
};

export default Project14;
