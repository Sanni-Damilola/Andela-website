/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import hero from "./Assets/green-wash.jpg";
import Header from "./Header";

const Hero = () => {
  return (
    <Container>
      {/* Hero itself */}
      <Content>
        <Text>
          Find work that you <br />
          <span>
            love with companies <br />
          </span>
          you can trust
        </Text>
        <Para>
          Join the Andela Talent Network to experience the joy of long-term
          work,
          <br />
          with vetted companies and competitive compensation.
        </Para>
        <Btn2>
          <Buttons
            br='70px'
            bd=''
            bg='#56C870'
            wide='350px'
            length='70px'
            cc='black'>
            Apply to access exclusive jobs
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
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  position: relative;
  background-attachment: fixed;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(35, 57, 52, 0.3);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  height: 80px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  color: white;
  font-size: 20px;
`;
const Log = styled.div`
  width: 10%;
  height: 70%;
  /* background-color: blue; */
  margin-left: 30px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
const Navigation = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: blue; */
`;
const Nav = styled.div`
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
const Content = styled.div`
  margin-left: 30px;
  color: white;
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
`;
