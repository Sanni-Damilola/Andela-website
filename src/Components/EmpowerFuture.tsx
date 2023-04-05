/** @format */

import React from "react";
import styled from "styled-components";
import visual from "./Assets/Visual-3.png";

const EmpowerFuture = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h5>Empower your future</h5>
          <h1>
            Why the world’s best
            <br />
            talent prefers Andela
          </h1>
          <p>
            Long-term placements
            <br />
            Trusted career partner
            <br />
            Career Guidance
            <br />
            96% match success
          </p>
          <Buttons
            br='50px'
            bd=''
            bg='#56C870'
            wide='200px'
            length='70px'
            cc='black'>
            Find Tech Experts
          </Buttons>
        </Content>

        <Image>
          <img src={visual} alt='' />
        </Image>
      </Wrapper>
    </Container>
  );
};

export default EmpowerFuture;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: darkblue; */
`;
const Image = styled.div`
  width: 60%;
  height: 500px;
  /* background-color: yellow; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 30%;
  height: 500px;
  /* background-color: red; */
  h5 {
    font-size: 19px;
  }
  h1 {
    font-size: 40px;
    line-height: 38px;
    width: 120%;
    line-height: 50px;
    font-style: italic;
    /* background-color: red; */
  }
  p {
    font-size: 17px;
    line-height: 30px;
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
  font-size: 20px;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
