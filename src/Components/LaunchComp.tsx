/** @format */

import React from "react";
import styled from "styled-components";

const LaunchComp = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          Andela Launches New Platform <br />
          to Power the Future of Customized Work
        </Text>
        <Buttons
          br='50px'
          bd=''
          bg='#56C870'
          wide='200px'
          length='70px'
          cc='black'>
          Find out more
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default LaunchComp;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #173b3f;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: white;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  /* background-color: red; */
`;
const Text = styled.div`
  font-size: 35px;
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
