/** @format */

import React from "react";
import styled from "styled-components";
import youngboy from "./Assets/new-york-city-midtown-manhattan-2021-08-26-16-02-25-utc.jpg";

const GrowBusiness = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          Grow your business and accelerate <br />
          innovation with Andela
        </h1>
        <Buttons
          br='50px'
          bd=''
          bg='#56C870'
          wide='150px'
          length='70px'
          cc='black'>
          Sign Up
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default GrowBusiness;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${youngboy});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(41, 68, 66, 0.9);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 10;
  /* background-color: red; */
  h1 {
    text-align: center;
    font-size: 40px;
    span {
      font-style: italic;
    }
  }
`;
const Buttons = styled.div<{
  wide: string;
  br: string;
  bg: string;
  cc: string;
  bd: string;
  length: string;
}>`
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
  font-size: 18px;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
