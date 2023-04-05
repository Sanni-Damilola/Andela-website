/** @format */

import React from "react";
import styled from "styled-components";
import youngirl from "./Assets/smiling-young-african-american-business-woman-work-2021-08-28-04-34-28-utc.jpg";

const GlobalMarket = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Join our global marketplace today</h1>
        <Btn2>
          <Buttons
            br='50px'
            bd=''
            bg='white'
            wide='180px'
            length='70px'
            cc='black'>
            Find Work
          </Buttons>
          <Buttons
            br='70px'
            bd=''
            bg='#56C870'
            wide='230px'
            length='70px'
            cc='#383B3F'>
            Discover Talent
          </Buttons>
        </Btn2>
      </Wrapper>
    </Container>
  );
};

export default GlobalMarket;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${youngirl});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(69, 98, 101, 0.8);
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
  z-index: 999;
  /* background-color: red; */
  h1 {
    text-align: center;
    font-size: 40px;
    span {
      font-style: italic;
    }
  }
`;
const Btn2 = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  /* background-color: red; */
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
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
