/** @format */

import React from "react";
import styled from "styled-components";
import youngboy from "./Assets/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpg";

const Connection = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          Connecting <span>your brilliance</span> <br />
          with opportunity
        </h1>
        <Buttons
          br='50px'
          bd=''
          bg='#56C870'
          wide='300px'
          length='70px'
          cc='black'>
          Apply to the Talent Network
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Connection;

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
    background-color: rgba(55, 73, 75, 0.6);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 40%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 999;
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
