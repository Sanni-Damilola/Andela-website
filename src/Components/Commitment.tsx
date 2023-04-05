/** @format */

import React from "react";
import styled from "styled-components";

const Commitment = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>
            Our commitment to <br />
            your success
          </h1>
        </Content>

        <Content2>
          <h3>Technologist first culture</h3>
          <p>
            Ensuring a seamless experience for technologists is our top
            priority. You <br /> can rest assured there is always someone
            looking out for your interests <br /> and career.
          </p>

          <h3>Trusted platform</h3>
          <p>
            We only work with trusted and vetted companies. No matter what,
            we’ll <br /> ensure you are paid for the work you do, and on time.
          </p>

          <h3>Global support</h3>
          <p>
            Wherever you are, and whatever issues you may face, we’re here to
            help <br /> solve any disputes, fast!
          </p>
        </Content2>
      </Wrapper>
    </Container>
  );
};

export default Commitment;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(19, 33, 40);
  /* background-color: red; */
`;
const Content = styled.div`
  width: 45%;
  height: 450px;
  /* background-color: blue; */
  h1 {
    font-size: 40px;
    line-height: 38px;
    width: 100%;
    font-style: italic;
  }
`;
const Content2 = styled.div`
  width: 50%;
  height: 450px;
  /* background-color: brown; */
  h3 {
    font-size: 25px;
  }
  p {
    font-size: 20px;
  }
`;
