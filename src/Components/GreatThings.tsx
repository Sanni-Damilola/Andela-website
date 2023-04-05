/** @format */

import React from "react";
import styled from "styled-components";

const GreatThings = () => {
  return (
    <Container>
      <Wrapper>
        <Part1>
          <Text>
            <h1>
              We’ve achieved <br />
              many great things
            </h1>
          </Text>
        </Part1>
        <Part2>
          <Div1>
            <h5>FUTURE</h5>
            <h3>We release our open marketplace</h3>
            <p>
              We unlock the ability for our users to interact directly with{" "}
              <br /> one another while launching new value-added services like{" "}
              <br /> healthcare.
            </p>
          </Div1>
          <Div2>
            <h3>$200M Series E funding</h3>
            <p>
              Led by Softbank Vision Fund 2 with participation from new <br />{" "}
              investor Whale Rock and existing investors including <br />{" "}
              Generation Investment Management, Chan Zuckerberg <br />{" "}
              Initiative, and Spark Capital.
            </p>
          </Div2>
          <Div3>
            <h3>Global expansion announcement</h3>
            <p>
              After proving that remote work was the way of the future, <br />{" "}
              we doubled down on our investment in global talent in <br />{" "}
              emerging markets around the world.
            </p>
          </Div3>
          <Div4>
            <h3>Welcomed senior remote engineers</h3>
            <p>
              Senior engineers in Egypt and Ghana joined the Andela <br />{" "}
              community creating our first-ever remote hubs.
            </p>
          </Div4>
          <Div5>
            <h3>Launched pan-African hub</h3>
            <p>
              In partnership with the Rwanda Development Board that <br />{" "}
              integrates all government agencies responsible for the <br />{" "}
              attraction, retention, and facilitation of investments in the{" "}
              <br /> national economy.
            </p>
          </Div5>
          <Div6>
            <h3>Launched Andela Learning Community (ALC)</h3>
            <p>
              We partnered with Google and Udacity to create a technical <br />{" "}
              learning program accessible to aspiring developers in Kenya,{" "}
              <br /> Nigeria, and Uganda.
            </p>
          </Div6>
          <Div7>
            <h3>Launched an all-female cohort of engineers</h3>
            <p>
              To increase female representation in tech, Andela Kenya <br />{" "}
              opened applications for an all-female contingent in the <br />{" "}
              country’s capital of Nairobi.
            </p>
          </Div7>
          <Div8>
            <h3>Our community became international</h3>
            <p>
              After incredible success in Nigeria, we opened applications <br />{" "}
              to Kenya, Ghana, and South Africa with a new hub in Nairobi.
            </p>
          </Div8>
          <Div9>
            <h3>Launched our first recruitment cycle</h3>
            <p>
              We hired our first cohort – four Nigerian software engineers{" "}
              <br /> – after receiving 700 applications for 4 spots.
            </p>
          </Div9>
        </Part2>
      </Wrapper>
    </Container>
  );
};

export default GreatThings;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
`;
const Part1 = styled.div`
  width: 35%;
  /* height: 500px; */
  /* background-color: orange; */
  color: #132128;
`;
const Text = styled.div`
  font-size: 25px;
  font-style: italic;
`;
const Part2 = styled.div`
  width: 50%;
  /* height: 500px; */
  color: black;
  /* background-color: hotpink; */
`;
const Div1 = styled.div`
  position: relative;
  h5 {
    margin-left: 90px;
  }

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
    content: "2022";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 147px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div2 = styled.div`
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
    content: "2021";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 137px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div3 = styled.div`
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
    content: "2020";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 108px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div4 = styled.div`
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
    content: "2019";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 77px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div5 = styled.div`
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
    content: "2018";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 137px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div6 = styled.div`
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
    content: "2017";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 107px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div7 = styled.div`
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
    content: "2016";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 107px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div8 = styled.div`
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
    content: "2015";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
  ::after {
    content: "";
    width: 2px;
    background-color: black;
    height: 77px;
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const Div9 = styled.div`
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
    content: "2014";
    width: 60px;
    height: 60px;
    background-color: transparent;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 20px;
  }
`;
