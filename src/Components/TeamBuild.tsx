/** @format */

import React from "react";
import styled from "styled-components";
import people3 from "./Assets/1-10.png";

const TeamBuild = () => {
  return (
    <Container>
      <Wrapper>
        <Image>
          <img src={people3} alt='' />
        </Image>
        <Content>
          <h5>Build your team today</h5>
          <h1>
            Exceptional <br />
            technical talent
          </h1>
          <p>
            Skilled engineers, product managers, and designers at your
            fingertips. An <br /> extensive list of technical services to suit
            your business needs. Start <br /> building your world-class team
            faster with talent from Andela.
          </p>
          <Buttons
            br='70px'
            bd=''
            bg='#56C870'
            wide='230px'
            length='70px'
            cc='#383B3F'>
            Discover Talent
          </Buttons>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default TeamBuild;

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #173b3f;
  color: white;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
const Image = styled.div`
  width: 45%;
  height: 400px;
  /* background-color: green; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 50%;
  height: 400px;
  /* background-color: blue; */
  h5 {
    font-size: 19px;
  }
  h1 {
    font-size: 40px;
    line-height: 45px;
    width: 100%;
    font-style: italic;
  }
  p {
    font-size: 19px;
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
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
