/** @format */

import React from "react";
import bgSpark from "../Assets/section-bg-image.jpeg";
import styled from "styled-components";

const Spark = () => {
  return (
    <Container>
      <Wrapper>
        <Part1>
          <Text>
            <h1>
              Build a brilliant <br />
              team quickly
            </h1>
          </Text>
          <Para>
            <p>
              Brilliant minds and companies come <br />
              together to build the future.
            </p>
          </Para>
          <Btn>
            <Buttons
              br='50px'
              bd=''
              bg='#56C870'
              wide='300px'
              length='70px'
              cc='#383B3F'>
              Build your dream team
            </Buttons>
          </Btn>
        </Part1>
        <Part2>
          <Div1>
            <h3>Smart skill matching</h3>
            <p>
              Our intuitive machine learning and AI platform finds you the{" "}
              <br /> best match for any role.
            </p>
          </Div1>
          <Div2>
            <h3>Meet the best talent</h3>
            <p>
              Easily schedule interviews and meet top technologists that fit{" "}
              <br /> within your team.
            </p>
          </Div2>
          <Div3>
            <h3>Continued excellence</h3>
            <p>
              Integrate your new team members quickly and effectively. Let{" "}
              <br /> us manage payroll and compliance.
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
    background-color: rgba(60, 91, 95, 0.5);
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
  /* height: 300px; */
  /* background-color: orange; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  margin-top: -70px;
`;
const Text = styled.div`
  font-size: 23px;
  font-style: italic;
`;
const Para = styled.div`
  font-size: 18px;
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
  /* background-color: red; */

  h3 {
    font-size: 23px;
    margin-left: 90px;
    /* background-color: blue; */
    margin-top: 30px;
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
    height: 76px;
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
