/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import hero from "./Assets/annie-spratt-AkftcHujUmk-unsplash-2.jpg";
import Header from "./Header";

const Hero = () => {
  return (
    <Container>
      {/* Hero itself */}
      <Content>
        <Text>
          Scale your business
          <br />
          with technologists
          <br />
          <span>you can trust</span>
        </Text>
        <Para>Accelerate innovation with vetted technical talent</Para>
        <Btn2>
          <Buttons
            br='70px'
            bd=''
            bg='#56C870'
            wide='230px'
            length='70px'
            cc='#383B3F'>
            Discover Talent
          </Buttons>
        </Btn2>
      </Content>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 700px;
  width: 100%;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-attachment: fixed;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(29, 55, 55, 0.8);
    position: absolute;
  }
`;
const Content = styled.div`
  margin-left: 30px;
  color: white;
  z-index: 10;
`;
const Text = styled.h1`
  margin-top: 120px;
  color: white;
  font-size: 65px;
  span {
    font-style: italic;
  }
`;
const Para = styled.div`
  font-size: 20px;
`;
const Btn2 = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;
const Buttons = styled.div<{
  wide: string;
  br: string;
  bg: string;
  cc: string;
  bd: string;
  length: string;
}>`
  font-size: 20px;
  width: ${(props) => props.wide};
  height: ${(props) => props.length};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cc};
  border: ${(props) => props.bd};
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
