/** @format */

import React from "react";
import styled from "styled-components";
import gallery from "./Assets/shutterstock_1862846512-1536x1075.jpg";

const Gallery = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Grow your potential beyond borders</h1>
        <p>
          Connect with a global network and land international opportunities.
        </p>

        <Buttons
          br='50px'
          bd=''
          bg='#56C870'
          wide='280px'
          length='70px'
          cc='black'>
          Discover opportunities
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  color: white;
  background-image: url(${gallery});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(53, 84, 91, 0.85);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 55%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  z-index: 999;
  h1 {
    font-size: 40px;
    font-style: italic;
    letter-spacing: 2px;
  }
  p {
    font-size: 20px;
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
