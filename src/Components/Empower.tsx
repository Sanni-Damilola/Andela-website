/** @format */

import React from "react";
import styled from "styled-components";
import visual from "./Assets/Visual-3.png";

const Empower = () => {
  return (
    <Container>
      <Content2>
        <img src={visual} alt='' />
      </Content2>
      <Content>
        <h5>Empower Your Future</h5>
        <h1>What Andela means to us</h1>
        <p>
          We exist to unlock human potential at scale. We envision a world where
          the most talented people can build a career commensurate with their
          ability – not their race, gender, or geography.
        </p>
      </Content>
    </Container>
  );
};

export default Empower;

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
  h5 {
    font-size: 19px;
  }
  h1 {
    font-size: 35px;
    margin-top: -20px;
    width: 100%;
    font-style: italic;
    /* background-color: red; */
  }
  p {
    font-size: 19px;
    line-height: 30px;
    margin-top: -10px;
  }
`;
const Content2 = styled.div`
  width: 40%;
  height: 450px;
  /* background-color: red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
