import React from "react";
import { styled } from "styled-components";

export default function SectionHeader(props) {
  return <Name>{props.name}</Name>;
}
const Name = styled.h1`
  color: #e5e7eb;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 20px;
  user-select: none;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    letter-spacing: 0.2rem;
  }
`;
