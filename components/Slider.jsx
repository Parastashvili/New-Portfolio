import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import data from "../src/data/data";
import "@splidejs/react-splide/css/skyblue";
import { styled } from "styled-components";
import next from "../src/assets/next.png";
import prev from "../src/assets/prev.png";
export default () => {
  const options = {
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    height: "15rem",
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
                <div className="projectInner">
                  <div
                    style={{
                      width: "auto",
                      height: "200px",
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      margin: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="hover">
                      <h1 className="projectName">{item.name}</h1>
                      <p className="projectDSC">{item.text}</p>
                      <div className="buttonCont">
                        <a href={item.githubLink} target="_blank">
                          <button className="viewCodeBTN">Code</button>
                        </a>
                        <a href={item.liveLink} target="_blank">
                          <button className="viewCodeBTN">Live Site</button>
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
          <button className="splide__arrow splide__arrow--next">
            <img src={next} alt="next" />
          </button>
          <button className="splide__arrow splide__arrow--prev">
            <img src={prev} alt="prev" />
          </button>
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
        rgba(139, 92, 246, 0.9) 0%,
        rgba(236, 72, 153, 0.9) 100%
      );
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      flex-direction: column;
      gap: 20px;
      h1,
      p {
        width: 70%;
        text-align: center;
        color: #f9fafb;
        font-family: Poppins;
        font-style: normal;
      }
      h1 {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.03rem;
      }
      p {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.02rem;
      }
      div {
        display: flex;
        gap: 10px;
        a {
          button {
            background-color: #F59E0B ;
            border: 0px;
            border-radius: 3px;
            text-align: center;
            color: #000000;
            font-family: Poppins;
            font-style: normal;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.02rem;
          }
        }
      }
    }
  }
`;
