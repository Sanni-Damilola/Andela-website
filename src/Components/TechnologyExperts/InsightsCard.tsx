/** @format */

import React from "react";
import styled from "styled-components";

interface card {
  tittle: string;
  image: string;
  bg: string;
}

const InsightsCard: React.FC<card> = ({ tittle, image, bg }) => {
  return (
    <Container bg={bg}>
      <Content>
        <Div>
          <p>Insights</p>
          <h2>{tittle}</h2>
          <Buttons
            br='70px'
            bd='1px solid white'
            bg=''
            wide='160px'
            length='40px'
            cc='white'>
            Learn More
          </Buttons>
        </Div>
      </Content>
      <Image>
        <img src={image} alt='' />
      </Image>
    </Container>
  );
};

export default InsightsCard;

const Container = styled.div<{ bg: string }>`
  width: 710px;
  height: 350px;
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 5px;
`;
const Content = styled.div`
  width: 380px;
  height: 350px;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
`;
const Div = styled.div`
  margin-left: 20px;
  /* background-color: yellow; */
  p {
    font-size: 18px;
    font-style: italic;
  }
`;
const Image = styled.div`
  width: 330px;
  height: 350px;
  border-radius: 0px 10px 10px 0px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`;
