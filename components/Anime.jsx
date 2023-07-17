import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Animex from "../src/assets/svg/anime.svg";
export default function Anime() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const calculateImagePosition = () => {
    const sensitivity = -50;
    const offsetX = (position.x - window.innerWidth / 2) / sensitivity;
    const offsetY = (position.y - window.innerHeight / 2) / sensitivity;
    return `translate(${offsetX}px, ${offsetY}px)`;
  };
  return (
    <Cont>
      <Img
        src={Animex}
        alt="anime"
        style={{ transform: calculateImagePosition() }}
      />
    </Cont>
  );
}
const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const Img = styled.img`
  width: 100%;
  max-width: 400px;
  @media screen and (min-width: 1024px) {
    max-width: 550px;
  }
`;
