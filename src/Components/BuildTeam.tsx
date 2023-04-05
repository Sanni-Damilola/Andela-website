/** @format */

import React from "react";
import styled from "styled-components";
import andelaNewLogo from "./Assets/Andela_NewLogos.png";

const BuildTeam = () => {
  return (
    <Container>
      <Wrapper>
        <Image>
          <img src={andelaNewLogo} alt='' />
        </Image>
        <Content>
          <h5>Build your team today</h5>
          <h1>
            We’ve cracked the code on
            <br /> creating engineering teams
          </h1>
          <p>
            Skilled engineers, product managers, and designers at your
            fingertips. An extensive list of technical services to suit your
            business needs. Start building your world-class team faster with
            talent from Andela.
          </p>
          <Buttons
            br='50px'
            bd=''
            bg='#56C870'
            wide='200px'
            length='70px'
            cc='black'>
            Build your team
          </Buttons>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default BuildTeam;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.div`
  width: 40%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 45%;
  height: 350px;
  h5 {
    font-size: 19px;
  }
  h1 {
    font-size: 40px;
    line-height: 38px;
    width: 100%;
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
