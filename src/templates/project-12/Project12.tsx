import React from "react";
import one from "../../assets/12-1.png";
import two from "../../assets/12-2.png";
import three from "../../assets/12-3.png";
import four from "../../assets/12-4.png";
import five from "../../assets/12-5.png";
import "./project-12.css";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project12: React.FC = () => {
  const places = [one, two, three, four, five];
  React.useEffect(() => {
    let getRatio = (el: any) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section: any, i: number) => {
      section.bg = section.querySelector(".bg");

      section.bg.style.backgroundImage = "url(" + places[i] + ")";
      console.log(i, section.bg.style.backgroundImage);

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);
  return (
    <div className="project-12">
      <section>
        <div className="bg"></div>
        <h1>Consequat ullamco</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>eiusmod culpa amet</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>cillum sunt aliquip</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>esse incididunt</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>pariatur.</h1>
      </section>
    </div>
  );
};

export default Project12;
