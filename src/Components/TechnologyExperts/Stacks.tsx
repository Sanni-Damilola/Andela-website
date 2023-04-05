/** @format */

import React from "react";
import styled from "styled-components";

interface course {
  stackName: string;
}

const Stacks: React.FC<course> = ({ stackName }) => {
  return (
    <Stack>
      <p>{stackName}</p>
    </Stack>
  );
};

export default Stacks;

const Stack = styled.div`
  width: 280px;
  height: 50px;
  border-radius: 40px;
  background-color: white;
  margin: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  p {
    margin-left: 10px;
    font-size: 20px;
  }
  :hover {
    color: #56c870;
    transform: scale(1.1);
  }
`;
