import styled from "styled-components";
import topEclipse from "./assets/svg/Eclipse.svg";
import bottomEclipse from "./assets/svg/Eclipse2.svg";
import Anime from "../components/Anime";
import WhiteAsset from "./assets/svg/Sphere-White-Matte.svg";
import BlueAsset from "./assets/svg/Pill-Blue-Glossy.svg";
import YelloAsset from "./assets/svg/SuperToroid-Yellow-Glossy.svg";
// import MouseTracker from "../components/Mousetracker";
import logo from "./assets/svg/logo.png";
import BurgerMenu from "../components/Burger";
import down from "./assets/svg/downl.gif";
import SectionHeader from "../components/SectionHeader";
import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import Reveal from "../components/Reveal";
import Techstack from "../components/TechStack";
import "transition-style";
function App() {
  const [text, setText] = useState("");
  const words = ["Frontend Engineer", "Web Designer"];
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
        }, 5000);
      }
    }, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex]);
  const [view, setView] = useState(1);
  useEffect(() => {
    const paragraph = document.getElementById("colorful-paragraph");
    if (paragraph) {
      const words = paragraph.innerText.split(" ");
      const getRandomColor = () => {
        const colors = ["#ffffff", "#F2672E"];
        return colors[Math.floor(Math.random() * colors.length)];
      };
      const updateWordColor = () => {
        paragraph.innerHTML = words
          .map(
            (word) => `<span style="color: ${getRandomColor()}">${word} </span>`
          )
          .join("");
      };
      updateWordColor();
    }
  }, [view]);

  return (
    <Main>
      <OldVersion
        href="https://parastashvili-portfolio-react-ts-xd2s.vercel.app/"
        target="_blank"
      >
        Old Version
      </OldVersion>
      <img className="asset white" src={WhiteAsset} alt="" />
      <img className="asset blue" src={BlueAsset} alt="" />
      <img className="asset yellow" src={YelloAsset} alt="" />
      <img className="topEclipse" src={topEclipse} alt="Eclipse" />
      <img className="bottomEclipse" src={bottomEclipse} alt="Eclipse" />
      <Inner>
        <DeskBar>
          <ul>
            <li
              onClick={() => {
                setView(2);
              }}
            >
              <p>Projects</p>
            </li>
            <li
              onClick={() => {
                setView(3);
              }}
            >
              <p>Tech Stack</p>
            </li>
            <li
              onClick={() => {
                setView(4);
              }}
            >
              <p>About</p>
            </li>
          </ul>
        </DeskBar>
        <img
          onClick={() => {
            setView(1);
          }}
          className="logo"
          src={logo}
          alt="logo"
        />
        {(view == 1 || innerWidth < 1024) && (
          <Section id="welcome">
            <Reveal>
              <p className="first">Hi there! 👋 </p>{" "}
            </Reveal>
            <Reveal>
              <p className="second">
                I'm Levan Parastashvili, a <br />
                <span className="frontend">{text}</span> 💻🌱{" "}
              </p>
            </Reveal>
            <Reveal>
              <p className="third">
                I have a deep passion for coding and am always looking for new
                challenges to improve my skills and knowledge. 🤓💪 I believe
                that coding is not just a skill, but a mindset that allows me to
                solve problems and create innovative solutions. My approach to
                coding is to combine creativity and technical skills to deliver
                exceptional results. 🚀💡 Feel free to explore my profile and
                projects, and don't hesitate to get in touch with me for any
                collaboration or discussion.
              </p>
            </Reveal>
            <Reveal>
              <Resume
                href="https://drive.google.com/file/d/1jtirsBYt9rUPGcdlvG2-Fx-TMvKfL_s0/view?usp=sharing"
                target="_blank"
              >
                <p className="mobile">Download CV</p>
                <p className="desktop">
                  Let's make great things together! 🤝🌟
                </p>
                <img className="download" src={down} alt="" />
              </Resume>
            </Reveal>
          </Section>
        )}
        {(view == 2 || innerWidth < 1024) && (
          <div id="projects">
            <SectionHeader name="Projects" />
            <Slider />
          </div>
        )}
        {(view == 3 || innerWidth < 1024) && (
          <div id="tech">
            <SectionHeader name="Tech Stack" />
            <Tech>
              <Techstack level={8} name="HTML5" />
              <Techstack level={7} name="CSS3 / SASS / SCSS" />
              <Techstack level={8} name="Styled Components" />
              <Techstack level={5} name="Bootstrap & Tailwind" />
              <Techstack level={7} name="Javascript (Vanilla)" />
              <Techstack level={6} name="Typescript" />
              <Techstack level={7} name="React" />
              <Techstack level={6} name="jQuerry" />
              <Techstack level={8} name="FlexBox Layout" />
              <Techstack level={6} name="React Spring" />
              <Techstack level={6} name="MUI" />
              <Techstack level={6} name="Framer Motion" />
              <Techstack level={7} name="Ant Desing" />
              <Techstack level={7} name="Splide.js" />
              <Techstack level={6} name="Grid Layout" />
              <Techstack level={7} name="Git / Github" />
              <Techstack level={5} name="Node.js" />
              <Techstack level={5} name="Firebase" />
            </Tech>
          </div>
        )}
        {(view == 4 || innerWidth < 1024) && (
          <div id="about">
            <SectionHeader name="About" />
            <About id="colorful-paragraph">
              I transitioned from e-commerce category management to front-end
              engineering, following my passion for development. In just one
              month, I built multiple websites using HTML, CSS, and JavaScript,
              showcasing my skills in page structure, responsive design, and Git
              collaboration. I also created engaging games like Memory and Tic
              Tac Toe. I quickly embraced CSS frameworks like Tailwind and
              Bootstrap, streamlining my workflow and creating visually stunning
              user interfaces. I expanded my knowledge with React and
              TypeScript, focusing on daily practice to hone my skills and build
              a strong portfolio. As a passionate front-end engineer, I'm driven
              to create intuitive, user-centric experiences. With a solid
              foundation and a thirst for innovation, I'm eager to contribute my
              expertise to dynamic and collaborative development teams, crafting
              impactful web experiences.
            </About>
          </div>
        )}{" "}
        {(view == 1 || innerWidth < 1024 || view == 4 || innerWidth < 1024) && (
          <Anime />
        )}
        <BurgerMenu />
      </Inner>
      {/* <MouseTracker /> */}
    </Main>
  );
}
export default App;
const Main = styled.div`
  width: 100%;
  padding: 50px 0px;
  background-color: #121212;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    padding: 0;
  }
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
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  background: linear-gradient(
    136deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(15px);
  width: calc(100% - 60px);
  @media screen and (min-width: 1024px) {
    height: calc(100vh - 220px);
    max-width: 1240px;
    max-height: 600px;
    padding: 50px;
  }
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
    @media screen and (min-width: 1024px) {
      padding: 50px;
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
    @media screen and (min-width: 1024px) {
      font-size: 28px;
      letter-spacing: 0.15rem;
    }
  }
  .second {
    color: #f9fafb;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.04rem;
    @media screen and (min-width: 1024px) {
      font-size: 24px;
      letter-spacing: 0.1rem;
    }
    .frontend {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.04rem;
      background-image: linear-gradient(
        to right,
        #ffff00,
        #ff2b2b 50%,
        #e5e7eb 50%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (min-width: 1024px) {
        font-size: 24px;
        letter-spacing: 0.1rem;
      }
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

    @media screen and (min-width: 1024px) {
      font-size: 16px;
      letter-spacing: 0.07rem;
      max-width: 600px;
    }
  }
`;
const Resume = styled.a`
  width: 125px;
  height: 30px;
  border-radius: 4px;
  background: linear-gradient(to right, #ffff00, #ff2b2b 100%);
  border: 0px;
  margin: 20px 0px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 40px;
  }
  &:hover {
    width: 130px;
    @media screen and (min-width: 1024px) {
      width: 370px;
    }
  }
  p {
    color: #000000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (min-width: 1024px) {
      font-size: 14px;
      letter-spacing: 0.07rem;
    }
  }
  .desktop {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  .mobile {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  .download {
    width: 25px;
  }
`;
const Tech = styled.div`
  display: grid;
  @media screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const About = styled.p`
  text-transform: capitalize;
  opacity: 1;
  margin: auto;
  max-width: 400px;
  padding: 20px;
  text-align: center;
  color: #f9fafb;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.05;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 0px;
    text-align: left;
    max-width: 600px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    &:hover {
      scale: 1;
      opacity: 0.8;
    }
  }
`;
const DeskBar = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
  position: absolute;
  transform: translate(-50%, 0%);
  left: 50%;
  ul {
    display: flex;
    gap: 20px;
    li {
      p {
        color: #f9fafb;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 20px;
        user-select: none;
        cursor: pointer;
        position: relative;
        letter-spacing: 0.08rem;
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 0, 0.7),
            rgba(255, 43, 43, 0.7) 100%
          );
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
          transform: scaleX(1);
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
const OldVersion = styled.a`
  position: absolute;
  bottom: 20px;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1rem;
  color: #f9fafb;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    letter-spacing: 0.15rem;
  }
`;
