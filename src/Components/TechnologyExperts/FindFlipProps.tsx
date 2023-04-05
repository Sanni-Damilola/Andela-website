/** @format */

import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";

interface flipProps {
  image: string;
  subject: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  fd: string;
}

const FindFlipProps: React.FC<flipProps> = ({
  image,
  subject,
  text1,
  text2,
  text3,
  text4,
  fd,
}) => {
  return (
    <Container fd={fd}>
      <Picture>
        <img src={image} alt='' />
      </Picture>
      <Content>
        <h1>{subject}</h1>
        <Para>
          <TiTick />
          <p>{text1}</p>
        </Para>
        <Para>
          <TiTick />
          <p>{text2}</p>
        </Para>
        <Para>
          <TiTick />
          <p>{text3}</p>
        </Para>
        <Para>
          <TiTick />
          <p>{text4}</p>
        </Para>
      </Content>
    </Container>
  );
};

export default FindFlipProps;

const Container = styled.div<{ fd: string }>`
  width: 95%;
  height: 500px;
  /* background-color: blue; */
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
`;
const Picture = styled.div`
  width: 47%;
  height: 450px;
  /* background-color: yellow; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Content = styled.div`
  width: 47%;
  height: 300px;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
`;
const Para = styled.div`
  display: flex;
  width: 100%;
  /* background-color: yellow; */
  align-items: center;
  font-size: 17px;
  p {
    margin-left: 10px;
  }
`;
