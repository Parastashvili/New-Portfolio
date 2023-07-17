import React, { useState } from "react";
import { styled } from "styled-components";
import { Sling as Hamburger } from "hamburger-react";
import github from "../src/assets/github.png";
import linkedin from "../src/assets/linkedin.png";
import mail from "../src/assets/gmail.png";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Outer className="burger-menu">
      <span className="icon">
        <Hamburger
          direction="left"
          color="#E5E7EB"
          size={32}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </span>
      <NavBar className={isOpen ? "menu-items open" : "menu-items"}>
        <li>Projects</li>
        <li>Tech Stack</li>
        <li>Skills</li>
        <li>About</li>
        <Contact>
          <ul>
            <li>
              <a href="https://github.com/Parastashvili" target="_blank">
                <img src={github} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/levan-parastashvili/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="mailto:Levani.parastashvili@gmail.com">
                <img src={mail} alt="" />
              </a>
            </li>
          </ul>
        </Contact>
      </NavBar>
    </Outer>
  );
};

export default BurgerMenu;

const Outer = styled.div`
  .icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  }
`;
const NavBar = styled.ul`
  position: absolute;
  top: 30px;
  right: 0;
  margin: 20px 0;
  transform: translateX(150px);
  padding: 15px;
  transition: all 0.5s ease-in-out;
  li {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: right;
    margin-top: 8px;
    letter-spacing: 1px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      #ffff00,
      #ff2b2b 50%,
      #e5e7eb 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    padding: 5px;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.7s ease-in-out;
  }
  li:before {
    content: "";
    background: #f2672e;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  li:hover {
    background-position: 0;
  }

  li:hover::before {
    width: 100%;
  }

  &.open {
    transform: translateX(0px);
    background: linear-gradient(
      136deg,
      rgba(27, 26, 26, 0.9) 0%,
      rgba(38, 38, 38, 1) 100%
    );
    opacity: 1;
    border-radius: 10px 0px 0px 10px;
    padding: 15px;
  }
`;
const Contact = styled.div`
  margin-top: 15px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 0, 0.7),
    rgba(255, 43, 43, 0.7) 100%
  );
  border-radius: 5px;
  width: 100%;
  padding: 0px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    padding: 0 10px;
    li {
      padding: 0px;
      &:hover {
        scale: 1.1;
      }
    }
  }
  img {
    width: 30px;
  }
`;
