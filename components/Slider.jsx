import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import data from "../src/data/data";
import "@splidejs/react-splide/css/skyblue";
import { styled } from "styled-components";
import next from "../src/assets/next.png";
import prev from "../src/assets/prev.png";
import "./SliderEdit.css";
import React, { useState, useEffect } from "react";
import link from "../src/assets/link.gif";
import githubs from "../src/assets/githubs.gif";
export default () => {
  const options = {
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    height: "25rem",
  };
  return (
    <Splide
      options={options}
      aria-labelledby="autoplay-example-heading"
      hasTrack={false}
    >
      <div style={{ position: "relative" }}>
        <SplideTrack>
          {data.map((item) => (
            <SplideSlide key={item.id}>
              <Container className="projectOuterSlider">
                <div
                  className="projectInner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    className="slid"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      margin: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="hover">
                      <h1>{item.name}</h1>
                      <p>{item.text}</p>
                      <div>
                        <a href={item.githubLink} target="_blank">
                          <button>
                            Code
                            <img src={githubs} alt="github logo" />
                          </button>
                        </a>
                        <a href={item.liveLink} target="_blank">
                          <button>
                            Live Site
                            <img src={link} alt="link logo" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--next"></button>
          <button className="splide__arrow splide__arrow--prev"></button>
        </div>
      </div>
      <div className="splide__progress">
        <div
          className="splide__progress__bar"
          style={{
            background: "linear-gradient(90deg, #F59E0B 0%, #EF4444 100%)",
          }}
        />
      </div>
      <div className="splide__progress">
        <div className="splide__progress__bar" />
      </div>
    </Splide>
  );
};
const Container = styled.div`
  width: 100%;
  div {
    .slid {
      width: 100%;
      max-width: 400px;
      height: 280px;
      @media screen and (min-width: 1024px) {
        max-width: 600px;
        height: 360px;
      }
    }
    position: relative;
    &:hover {
      .hover {
        display: flex;
      }
    }
    .hover {
      display: none;
      transition: all 1s ease-in-out;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 0, 0.9) 0%,
        rgba(255, 43, 43, 0.9) 100%
      );
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      flex-direction: column;
      gap: 20px;
      @media screen and (min-width: 1024px) {
        gap: 50px;
      }
      h1,
      p {
        width: 70%;
        text-align: center;
        color: #f9fafb;
        font-family: Poppins;
        font-style: normal;
        text-transform: capitalize;
      }
      h1 {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.03rem;
        @media screen and (min-width: 1024px) {
          font-size: 33px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.02rem;
        @media screen and (min-width: 1024px) {
          font-size: 18px;
        }
      }
      div {
        display: flex;
        gap: 10px;
        @media screen and (min-width: 1024px) {
          gap: 30px;
        }
        a {
          button {
            background-color: #ffffff;
            border: 0px;
            border-radius: 3px;
            text-align: center;
            color: #000000;
            font-family: Poppins;
            font-style: normal;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.02rem;
            padding: 5px 10px;
            opacity: 0.8;
            @media screen and (min-width: 1024px) {
              font-size: 18px;
            }
            &:hover {
              opacity: 1;
              cursor: pointer;
              scale: 1.05;
            }
            img {
              width: 20px;
              margin-left: 5px;
              @media screen and (min-width: 1024px) {
                width: 30px;
                margin-left: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
