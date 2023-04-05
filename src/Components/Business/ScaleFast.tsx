/** @format */

import React from "react";
import styled from "styled-components";
import Stacks from "./Stacks";

const ScaleFast = () => {
  return (
    <Container>
      <h1>Your skills are in demand</h1>
      <h4>The future is yours to create.</h4>
      <Wrapper>
        <Stacks stackName='Python' />
        <Stacks stackName='Node.JS' />
        <Stacks stackName='Kotlin' />
        <Stacks stackName='Flask' />
        <Stacks stackName='React Native' />
        <Stacks stackName='Vue.js' />
        <Stacks stackName='PHP' />
        <Stacks stackName='Android' />
        <Stacks stackName='Javascript' />
        <Stacks stackName='Ruby' />
        <Stacks stackName='C#' />
        <Stacks stackName='DevOps' />
        <Stacks stackName='Golang' />
        <Stacks stackName='Data Scientists' />
        <Stacks stackName='React.js' />
        <Stacks stackName='Swift' />
        <Stacks stackName='Salesforce' />
        <Stacks stackName='Java' />
        <Stacks stackName='Django' />
      </Wrapper>
      <Buttons
        br='70px'
        bd='1px solid black'
        bg=''
        wide='400px'
        length='70px'
        cc='black'>
        Apply to the Andela Talent Network
      </Buttons>
    </Container>
  );
};

export default ScaleFast;

const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color: #edeff1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h4 {
    font-size: 20px;
  }
  h1 {
    font-size: 40px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  /* height: 400px; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
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
  margin: 50px;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
