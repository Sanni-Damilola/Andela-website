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
      <h1>
        Anytime, anywhere – with Andela, <br />
        the world is at your fingertips
      </h1>
      <p>
        Discover how leading companies have built impactful global teams with
        Andela.
      </p>
      <Wrapper>
        <Slider {...settings}>
          <InsightsCard
            image={purple}
            tittle='How Mastercard Foundry expanded into new global product offerings'
            bg='#4A1476'
          />
          <InsightsCard
            image={red}
            tittle="How Mindshare Scales Data Teams to serve the World's Largest Advertisers"
            bg='#701340'
          />
          <InsightsCard
            image={yellow}
            tittle='Learn how companies like GitHub Optimizes a Globally Distributed Engineering Team with Andela, at Viva Tech 2022!'
            bg='#C95227'
          />

          <InsightsCard
            image={purple}
            tittle='Wealthy leverages Andela engineers to tackle short-term optimizations and long-term upgrades'
            bg='#4A1476'
          />
          <InsightsCard
            image={yellow}
            tittle='Stax leverages Andela engineers to scale product features and enhancements'
            bg='#C95227'
          />
          <InsightsCard
            image={red}
            tittle='How a Top 10 Global Investment Bank is Rapidly Expanding Its Services by Leveraging Remote Talent'
            bg='#701340'
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
    font-size: 35px;
    font-style: italic;
    letter-spacing: 2px;
  }
  p {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
