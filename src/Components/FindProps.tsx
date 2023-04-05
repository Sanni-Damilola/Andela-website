/** @format */

import React from "react";
import styled from "styled-components";

interface flipProps {
  image: string;
  subject: string;
  text1: string;
  text2: string;
  text3: string;
  fd: string;
  icon: any;
  lh: string;
}

const FindProps: React.FC<flipProps> = ({
  image,
  subject,
  text1,
  text2,
  text3,
  fd,
  icon,
  lh,
}) => {
  return (
    <Container fd={fd}>
      <Picture>
        <img src={image} alt='' />
      </Picture>
      <Content>
        <h1>{subject}</h1>
        <Para lh={lh}>
          <img src={icon} alt='' />
          <p>{text1}</p>
        </Para>

        <Para lh={lh}>
          <img src={icon} alt='' />
          <p>{text2}</p>
        </Para>

        <Para lh={lh}>
          <img src={icon} alt='' />
          <p>{text3}</p>
        </Para>
      </Content>
    </Container>
  );
};

export default FindProps;

const Container = styled.div<{ fd: string }>`
  width: 100%;
  height: 500px;
  /* background-color: blue; */
  color: #132128;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
`;
const Picture = styled.div`
  width: 40%;
  height: 450px;
  /* background-color: yellow; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 55%;
  height: 300px;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
`;
const Para = styled.div<{ lh: string }>`
  display: flex;
  width: 100%;
  /* background-color: yellow; */
  align-items: center;
  font-size: 17px;
  p {
    margin-left: 10px;
    line-height: ${({ lh }) => (lh ? "5px" : "30px")};
  }
`;
