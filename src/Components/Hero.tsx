/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import hero from "./Assets/heropic.jpeg";
import andela from "./Assets/andela-logo.svg";
import Header from "./Header";

const Hero = () => {
  return (
    <Container>
      {/* Hero itself */}
      <Content>
        <Text>
          Discover <span>brilliant talent</span> <br />
          around the world
        </Text>
        <Para>
          Join Andela to build your team with developers, engineers, product
          designers, and the best remote technology experts.
        </Para>
        <Btn2>
          <Buttons
            br='50px'
            bd=''
            bg='#56C870'
            wide='200px'
            length='70px'
            cc='black'>
            Hire Talent
          </Buttons>
          <Buttons
            br='50px'
            bg='white'
            bd='1px solid white'
            length='70px'
            wide='200px'
            cc='black'>
            Apply for Jobs
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
  background-color: black;
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
  background-color: red;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(3%, 16%, 16%, 0.1);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  height: 80px;
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
  @media screen and (max-width: 420px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.h1`
  margin-top: 120px;
  color: white;
  font-size: 65px;
  span {
    font-style: italic;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    text-align: center;
    font-size: 30px;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 30px;
  }
`;
const Para = styled.div`
  font-size: 20px;
  @media screen and (max-width: 320px) {
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    text-align: center;
    font-size: 22px;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 18px;
  }
`;
const Btn2 = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 320px) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 420px) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 960px) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Buttons = styled.button<{
  wide: string;
  br: string;
  bg: string;
  cc: string;
  bd: string;
  length: string;
}>`
  @media screen and (max-width: 320px) {
    padding: 15px 20px;
    margin: 10px;
    font-size: 14px;
  }
  @media screen and (max-width: 420px) {
    padding: 15px 20px;
    margin: 10px;
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    padding: 15px 20px;
    margin: 10px;
    font-size: 14px;
  }
  border: 0;
  outline: none;
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
