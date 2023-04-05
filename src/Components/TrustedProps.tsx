/** @format */

import React from "react";
import styled from "styled-components";

interface icons {
  img: string;
}

const TrustedProps: React.FC<icons> = ({ img }) => {
  return (
    <Wrap>
      <img src={img} alt='' />
    </Wrap>
  );
};

export default TrustedProps;

const Wrap = styled.div`
  /* background-color: red; */
  width: 60%;
  height: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Image = styled.img``;
