/** @format */

import React from "react";
import styled from "styled-components";
import Stacks from "./Stacks";

const ScaleFast = () => {
  return (
    <Container>
      <h4>Scale faster with Andela</h4>
      <h1>What skills will drive your vision?</h1>
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
