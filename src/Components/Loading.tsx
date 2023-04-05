/** @format */

import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <LoadingBar>LoadingBar</LoadingBar>;
};

export default Loading;

const LoadingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  font-size: 10em;
`;
