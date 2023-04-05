/** @format */

import React from "react";
import yellow from "../Assets/yellow.svg";
import red from "../Assets/red.svg";
import purple from "../Assets/purple.svg";
import purpleR from "../Assets/purpleR.svg";
import lightP from "../Assets/lightP.svg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InsightsCard from "./InsightsCard";

const Insights = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };

  return (
    <Container>
      <h1>Insights to inspire</h1>
      <p>The latest articles from Andela.</p>
      <Wrapper>
        <Slider {...settings}>
          <InsightsCard
            image={yellow}
            tittle='AXA Mansard and Andela: Healthcare coverage for Nigeria'
            bg='#C95227'
          />
          <InsightsCard
            image={purple}
            tittle="Join Andela's EPIC Tournament"
            bg='#4A1476'
          />
          <InsightsCard
            image={yellow}
            tittle='Tips for technologists: The power of mind maps'
            bg='#C95227'
          />
          <InsightsCard
            image={purpleR}
            tittle='Six community tips to stay cyber secure'
            bg='#701340'
          />
          <InsightsCard
            image={yellow}
            tittle='Lead the future: Join the Andela Technical Leadership Program'
            bg='#C95227'
          />
          <InsightsCard
            image={yellow}
            tittle='SafetyWing and Andela: Healthcare coverage for Latin America'
            bg='#4A1476'
          />
          <InsightsCard
            image={lightP}
            tittle='How women are dictating the future of tech with the Andela Technical Leadership Program'
            bg='#4A1476'
          />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Insights;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  h1 {
    font-size: 40px;
    font-style: italic;
    letter-spacing: 2px;
  }
  p {
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
