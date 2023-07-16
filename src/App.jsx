import { styled } from "styled-components";
import topEclipse from "./assets/svg/eclipse.svg";
import bottomEclipse from "./assets/svg/eclipse2.svg";
import Anime from "../components/Anime";
import WhiteAsset from "./assets/svg/Sphere-White-Matte.svg";
import BlueAsset from "./assets/svg/Pill-Blue-Glossy.svg";
import YelloAsset from "./assets/svg/SuperToroid-Yellow-Glossy.svg";
import MouseTracker from "../components/Mousetracker";
import logo from "./assets/svg/logo.png";
import BurgerMenu from "../components/Burger";
import down from "./assets/svg/downl.gif";
import SectionHeader from "../components/SectionHeader";
import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
function App() {
  const [text, setText] = useState("");
  const words = [
    // "Frontend Engineer",
    // "Web Designer",
    // "Crypto Enthusiast",
    // "Blockchain Enthusiast",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const word = words[currentWordIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      const currentText = word.slice(0, currentIndex + 1);
      setText(currentText);
      currentIndex++;
      if (currentIndex === word.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            const currentText = word.slice(0, currentIndex);
            setText(currentText);
            currentIndex--;
            if (currentIndex === 0) {
              clearInterval(deletingInterval);

              setCurrentWordIndex(
                (prevIndex) => (prevIndex + 1) % words.length
              );
            }
          }, 100);
        }, 555000);
      }
    }, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex]);
  return (
    <Main>
      <img className="asset white" src={WhiteAsset} alt="" />
      <img className="asset blue" src={BlueAsset} alt="" />
      <img className="asset yellow" src={YelloAsset} alt="" />
      <img className="topEclipse" src={topEclipse} alt="Eclipse" />
      <img className="bottomEclipse" src={bottomEclipse} alt="Eclipse" />
      <Inner>
        <BurgerMenu />
        <img
          onClick={() => {
            console.log("yes");
          }}
          className="logo"
          src={logo}
          alt="logo"
        />
        <Section>
          <p className="first">Hi there! 👋 </p>{" "}
          <p className="second">
            I'm Levan Parastashvili, a <span className="frontend">{text}</span>{" "}
            💻🌱{" "}
          </p>
          <p className="third">
            I have a deep passion for coding and am always looking for new
            challenges to improve my skills and knowledge. 🤓💪 I believe that
            coding is not just a skill, but a mindset that allows me to solve
            problems and create innovative solutions. My approach to coding is
            to combine creativity and technical skills to deliver exceptional
            results. 🚀💡 Feel free to explore my profile and projects, and
            don't hesitate to get in touch with me for any collaboration or
            discussion.
          </p>
          <Resume
            href="https://drive.google.com/file/d/1jtirsBYt9rUPGcdlvG2-Fx-TMvKfL_s0/view"
            target="_blank"
          >
            <p className="mobile">Download CV</p>
            <p className="desktop">Let's make great things together! 🤝🌟</p>
            <img className="download" src={down} alt="" />
          </Resume>
        </Section>
        <SectionHeader name="Projects" />
        <Slider />
        <SectionHeader name="Tech Stack" />
        <SectionHeader name="Skills" />
        <SectionHeader name="About" />
        {/* <Anime /> */}
      </Inner>
      {/* <MouseTracker /> */}
    </Main>
  );
}
export default App;
const Main = styled.div`
  width: 100%;
  /* height: 100vh; */
  padding: 50px 0px;
  background-color: #121212;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .topEclipse {
    position: absolute;
    top: -300px;
    left: -300px;
  }
  .bottomEclipse {
    position: absolute;
    bottom: 0;
    right: -100px;
  }
  .asset {
    position: absolute;
  }
  .white {
    top: 20px;
    right: 15px;
  }
  .blue {
    left: 0;
    top: 50%;
  }
  .yellow {
    bottom: 10px;
    right: 0px;
  }
`;
const Inner = styled.div`
  overflow-x: hidden;
  position: relative;
  border-radius: 24px;
  background: linear-gradient(
    136deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(15px);
  width: calc(100% - 60px);
  /* height: calc(100vh - 60px); */
  .logo {
    width: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      scale: 0.9;
      opacity: 0.6;
    }
  }
  .text {
    background-color: red;
    cursor: pointer;
  }
`;
const Section = styled.div`
  margin-top: 100px;
  width: 90%;
  padding: 20px;
  .first {
    color: #f9fafb;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.1rem;
  }
  .second {
    color: #f9fafb;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.04rem;
    .frontend {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.1rem;
      background-image: linear-gradient(
        to right,
        #ffff00,
        #ff2b2b 50%,
        #e5e7eb 50%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .third {
    color: #f9fafb;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.02rem;
  }
`;
const Resume = styled.a`
  width: 120px;
  height: 30px;
  border-radius: 4px;
  background: linear-gradient(to right, #8b5cf6, #ec4899 100%);
  border: 0px;
  margin: 20px 0px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  p {
    color: #f9fafb;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .desktop {
    display: none;
  }
  .download {
    width: 20px;
  }
`;
