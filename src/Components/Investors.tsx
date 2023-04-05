/** @format */

import React from "react";
import styled from "styled-components";
import visual from "./Assets/Image-from-iOS.png";

const Investors = () => {
  return (
    <Container>
      <Content>
        <h1>Our Investors</h1>
        <p>
          We are grateful to be backed by some of the best <br />
          in the world.
        </p>
      </Content>
      <Content2>
        <img src={visual} alt='' />
      </Content2>
    </Container>
  );
};

export default Investors;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
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
    letter-spacing: 1px;
    /* background-color: red; */
  }
  p {
    font-size: 19px;
    line-height: 30px;
    margin-top: -10px;
    letter-spacing: 2px;
  }
`;
const Content2 = styled.div`
  width: 45%;
  height: 450px;
  /* background-color: red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
