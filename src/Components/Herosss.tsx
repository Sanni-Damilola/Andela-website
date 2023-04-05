/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import hero from "./Assets/about-banner.jpg";
import Header from "./Header";

const Hero = () => {
  return (
    <Container>
      {/* Hero itself */}
      <Content>
        <Text>
          Our mission is to
          <br />
          connect brilliance
          <br />
          <span>with opportunity</span>
        </Text>
        <Para>Irrespective of race, gender, and geography.</Para>
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
    background-color: rgba(77, 87, 90, 0.4);
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
