/** @format */

import React from "react";
import man1 from "./Assets/shutterstock_1660490494-1024x683.jpg";
import man2 from "./Assets/shutterstock_1696088776-1024x683.jpg";
import man3 from "./Assets/shutterstock_1653288229-1024x683.jpg";
import styled from "styled-components";
import Flipflop from "./TechnologyExperts/FindFlipProps";

const FindFlipFlop = () => {
  return (
    <Container>
      <h1>Find what you’re looking for and more</h1>
      <Wrapper>
        <Flipflop
          image={man1}
          subject='Grow your career with us'
          text1='Find meaningful, long-term work with interesting organizations'
          text2='Work with an internationally distributed team and company'
          text3='Gain additional skills through exclusive learning opportunities'
          text4='Network with other technologists to develop your expertise'
          fd='row'
        />
        <Flipflop
          image={man2}
          subject='Set your own rate'
          text1='Only work with companies we trust'
          text2='Receive payments on time in your local currency, USD, or in Crypto'
          text3='Discover salaries that match your skills and experience'
          text4=''
          fd=''
        />
        <Flipflop
          image={man3}
          subject='Work anytime, anywhere'
          text1='Ditch the commute and work from anywhere'
          text2='With roles across different time zones, you choose when you work'
          text3='Create a healthy, flexible work-life balance'
          text4=''
          fd='row'
        />
      </Wrapper>
    </Container>
  );
};

export default FindFlipFlop;

const Container = styled.div`
  width: 100%;
  /* height: 800px; */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    font-style: italic;
    margin-bottom: 30px;
    letter-spacing: 4px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  /* height: 750px; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
