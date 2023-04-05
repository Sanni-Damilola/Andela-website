/** @format */

import React from "react";
import styled from "styled-components";

interface Iprops {
  name: string;
  testify: string;
}

const PeaceCard: React.FC<Iprops> = ({ name, testify }) => {
  return (
    <Container>
      <Card>
        <Wrap>
          <h4>{name}</h4>
          <p>{testify}</p>
        </Wrap>
      </Card>
    </Container>
  );
};

export default PeaceCard;

const Card = styled.div`
  height: 230px;
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div``;
const Wrap = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  h4 {
    color: #132128;
    font-style: italic;
  }
  p {
    color: #3d444a;
    font-weight: 400;
    line-height: 25px;
  }
`;
