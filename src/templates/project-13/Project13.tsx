import React from "react";
import "./project-13.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Project13: React.FC = () => {
  React.useEffect(() => {
    const sections = document.querySelectorAll("section");

    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e: Event) => e.preventDefault(),
      disable: () => {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
          scrolling.events.forEach((e, i) =>
            (i ? document : window).addEventListener(e, scrolling.prevent, {
              passive: false,
            })
          );
        }
      },
      enable: () => {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) =>
            (i ? document : window).removeEventListener(e, scrolling.prevent)
          );
        }
      },
    };

    const goToSection = (section: any, anim?: any, i?: number) => {
      if (scrolling.enabled) {
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1,
        });

        anim && anim.restart();
      }
    };

    sections.forEach((section: any, i: number) => {
      const intoAnim = gsap.fromTo(
        section.querySelector(".right-col"),
        { yPercent: 50, duration: 1, paused: true },
        { yPercent: 0, duration: 1 }
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(section, intoAnim, i),
        onEnterBack: () => goToSection(section),
      });
    });
  }, []);
  return (
    <div className="project-13">
      <section id="landing-page" className="hero-story hero hero1">
        <div className="full-col width-100">
          <h2>Scroll down </h2>
        </div>
      </section>

      <section id="rooms" className="hero-story hero second-hero hero2">
        <div className="left-col width-33">
          <h2>Ea eu ut anim enim occaecat</h2>
        </div>
        <div className="right-col width-66 delayed">
          <h2> incididunt consequat aliquip laboris</h2>
        </div>
      </section>

      <section id="you" className="hero-story hero second-hero hero3">
        <div className="left-col width-33 delayed">
          <h2>Sit reprehenderit culpa</h2>
        </div>
        <div className="middle-col width-33">
          <h2>voluptate excepteur pariatur</h2>
        </div>
        <div className="right-col width-33 delayed">
          <h2>deserunt reprehenderit consectetur</h2>
        </div>
      </section>

      <section id="near" className="hero-story hero second-hero hero4">
        <div className="left-col width-66 delayed">
          <h2>nisi nulla culpa</h2>
        </div>
        <div className="right-col width-33">
          <h2>nisi mollit culpa</h2>
        </div>
      </section>

      <footer className="hero-story hero second-hero hero5">
        <h2>That's it. You can scroll up to top </h2>
      </footer>
    </div>
  );
};

export default Project13;
