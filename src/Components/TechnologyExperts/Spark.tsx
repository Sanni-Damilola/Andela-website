/** @format */

import React from "react";
import bgSpark from "../Assets/shutterstock_1241581108-1536x1024.jpg";
import styled from "styled-components";

const Spark = () => {
  return (
    <Container>
      <Wrapper>
        <Part1>
          <Text>
            <h1>
              Spark a <br />
              thousand <br />
              connections
            </h1>
          </Text>
          <Para>
            <p>
              Becoming part of a community <br />
              has never been easier.
            </p>
          </Para>
          <Btn>
            <Buttons
              br='50px'
              bd=''
              bg='#56C870'
              wide='180px'
              length='70px'
              cc='black'>
              {" "}
              Get Started
            </Buttons>
          </Btn>
        </Part1>
        <Part2>
          <Div1>
            <h3>Demonstrate your skills</h3>
            <p>
              Join our expert community by completing a short assessment <br />{" "}
              to showcase your skills.
            </p>
          </Div1>
          <Div2>
            <h3>Personalized matching</h3>
            <p>
              You’ve done the work to build your experience and <br />{" "}
              knowledge. Now we’ll find your dream role through enhancing <br />{" "}
              your profile, career coaching, and introducing you to the <br />{" "}
              world’s most innovative companies.
            </p>
          </Div2>
          <Div3>
            <h3>Unlock your potential</h3>
            <p>
              Once you land your perfect role, Andela is here to support you{" "}
              <br /> to hone your craft and achieve your goals.
            </p>
          </Div3>
        </Part2>
      </Wrapper>
    </Container>
  );
};

export default Spark;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgSpark});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(60, 91, 95, 0.6);
    position: absolute;
    color: white;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  height: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  /* background-color: blue; */
`;
const Part1 = styled.div`
  width: 35%;
  height: 500px;
  /* background-color: orange; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: white;
`;
const Text = styled.div`
  font-size: 30px;
  font-style: italic;
`;
const Para = styled.div`
  font-size: 20px;
`;
const Btn = styled.div``;
const Part2 = styled.div`
  width: 50%;
  height: 500px;
  /* background-color: hotpink; */
`;
const Div1 = styled.div`
  color: white;
  position: relative;

  h3 {
    font-size: 23px;
    margin-left: 90px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    margin-left: 90px;
  }
  ::before {
    content: "1";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: white;
    height: 76px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div2 = styled.div`
  color: white;
  position: relative;

  h3 {
    font-size: 23px;
    margin-left: 90px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    margin-left: 90px;
  }
  ::before {
    content: "2";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: white;
    height: 136px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div3 = styled.div`
  color: white;
  position: relative;

  h3 {
    font-size: 23px;
    margin-left: 90px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    margin-left: 90px;
  }
  ::before {
    content: "3";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 20px;
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
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
