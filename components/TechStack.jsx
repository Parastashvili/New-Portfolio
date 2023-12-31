import React from "react";
import "./techstack.css";
import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Techstack(props) {
  const divStyle = {
    width: `${props.level * 10}%`,
  };

  let level;
  if (props.level <= 3) {
    level = "Beginner";
  } else if (props.level > 3 && props.level < 7) {
    level = "Regular";
  } else if (props.level > 6 && props.level < 9) {
    level = "Advanced";
  } else {
    level = "Expert";
  }
  return (
    <Outer className="techCont">
      <div className="textCont">
        <p className="nameText">{props.name}</p>
        <p className="levelText">{level}</p>
      </div>
      <div className="sliderCont">
        <input
          type="range"
          value={props.level}
          className="slider"
          step={1}
          min={1}
          max={10}
          readOnly
        />
        <div
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          style={divStyle}
          className="filled"
        ></div>
      </div>
    </Outer>
  );
}
const Outer = styled.div`
  font-family: Poppins;
  margin: 5px 15px;
  .textCont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px 10px;
    user-select: none;
    margin: auto;
    max-width: 960px;
    .nameText {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
    }
    .levelText {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
    }
    .nameText {
      color: #f0f0f0;
    }
  }
  .sliderCont {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    .filled {
      position: absolute;
      top: 3px;
      left: 0;
      height: 10px;
      background: linear-gradient(to right, #ffff00, #ff2b2b 100%);
      border-radius: 5px;
    }
    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 10px;
      outline: none;
      background: #fdfdfd;
      border-radius: 83px;
      cursor: pointer;
      opacity: 0.1;
      border-radius: 5px;
    }
  }
`;
