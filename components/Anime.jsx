import Animex from "../src/assets/svg/anime.svg";
import { styled } from "styled-components";
import React from "react";

export default function Anime() {
  return (
    <div>
      <Img src={Animex} alt="" />
    </div>
  );
}
const Img = styled.img`
  width: 100%;
  max-width: 460px;
`;
