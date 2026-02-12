import { useEffect, useState } from "react";
import "./Hero.css";

import HeroSVG from "../../assets/art/hero.svg";       
import HeroStatic from "../../assets/art/hero-static.svg"; 

import Instagram from "../../assets/icons/instagram.png"
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import twitter from "../../assets/icons/twitter.png"

import Typewriter from "./Typewrite";

export default function Hero({ menuOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const eyes = document.querySelectorAll(".eye");

    const handleMouseMove = (e) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;

        const angle = Math.atan2(dy, dx);
        const maxMove = 4;

        const x = Math.cos(angle) * maxMove;
        const y = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  return (
    <div className="hero-container">
      <div className="hero-component">

        <div className="typewriter">
          {!menuOpen && (
            <Typewriter
              words={["Welcome", "いらっしゃいませ", "Willkommen"]}
              speed={70}
              pause={1200}
            />
          )}
          <p>Exploring ideas and turning them into meaningful outcomes.</p>
            <div className="hero-socials">
                <a className="social-pill instagram" href="#">
                    <img src={Instagram} alt="Instagram" />
                    <span>Instagram</span>
                </a>

                <a className="social-pill linkedin" href="#">
                    <img src={linkedin} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>

                <a className="social-pill twitter" href="#">
                    <img src={twitter} alt="Twitter" />
                    <span>Twitter</span>
                </a>

                <a className="social-pill github" href="#">
                    <img src={github} alt="GitHub" />
                    <span>GitHub</span>
                </a>
            </div>

        </div>


        <div className="hero-character">
          {isDesktop ? (
            <>

              <img src={HeroSVG} alt="hero" className="hero-face" />

              <div className="eye left">
                <div className="pupil"></div>
              </div>

              <div className="eye right">
                <div className="pupil"></div>
              </div>
            </>
          ) : (
            <>

              <img
                src={HeroStatic}
                alt="hero"
                className="hero-face hero-static"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
