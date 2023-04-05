/** @format */

import React from "react";
import styled from "styled-components";
import tick from "./Assets/tick-green.svg";
import map from "./Assets/Container.png";
import visual from "./Assets/Visual-1.png";
import people from "./Assets/3-1.png";
import FindProps from "./FindProps";

const FindFlip = () => {
  return (
    <Container>
      <h1>Find what you’re looking for and more</h1>
      <Wrapper>
        <FindProps
          image={map}
          subject='Rigorous vetting for talent from multiple regions'
          text1='Quick and efficient'
          text2='Only top quality options'
          text3='Stress-free hiring of global talent'
          fd='row'
          icon={tick}
          lh='key'
        />
        <FindProps
          image={visual}
          subject='The world’s leading companies are already here'
          text1='Feel the bustle of the Global Marketplace here at Andela where brilliant minds and companies gather from all over the world.'
          text2=''
          text3=''
          fd=''
          icon=''
          lh=''
        />
        <FindProps
          image={people}
          subject='Scale fast and with ease'
          text1='Onboarding is 70% faster'
          text2='We provide additional support'
          text3='Get the team you need, regardless of size'
          fd='row'
          icon={tick}
          lh='key'
        />
      </Wrapper>
    </Container>
  );
};

export default FindFlip;

const Container = styled.div`
  width: 100%;
  /* height: 800px; */
  background-color: white;
  color: #132128;
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
