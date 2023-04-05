/** @format */

import React from "react";
import styled from "styled-components";
import Stacks from "./Business/Stacks";

const Elevate = () => {
  return (
    <Container>
      <Content>
        <h1>
          Elevate your business with in <br /> demand skills
        </h1>
        <p>We will help you find the right fit for your business.</p>
        <Buttons
          br='70px'
          bd='1px solid black'
          bg=''
          wide='230px'
          length='70px'
          cc='#383B3F'>
          Schedule a call
        </Buttons>
      </Content>
      <Content2>
        <Stacks stackName='Angular' />
        <Stacks stackName='Quality Assurance' />
        <Stacks stackName='VueJS' />
        <Stacks stackName='PHP' />
        <Stacks stackName='Dev Ops' />
        <Stacks stackName='React' />
        <Stacks stackName='Data Engineers' />
        <Stacks stackName='C#' />
        <Stacks stackName='Ruby' />
        <Stacks stackName='Java' />
      </Content2>
    </Container>
  );
};

export default Elevate;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
  color: #132128;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  width: 45%;
  height: 300px;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
    line-height: 45px;
    width: 100%;
    font-style: italic;
  }
  p {
    font-size: 19px;
    line-height: 30px;
  }
`;
const Content2 = styled.div`
  width: 47%;
  height: 450px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  font-size: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
