/** @format */

import React from "react";
import styled from "styled-components";
import BoxProps from "./BlueCard";

const MeaningfulWork = () => {
  return (
    <Container>
      <h1>Welcome to the future of meaningful, sustainable work</h1>
      <p>
        We believe that the sum is greater than our parts – our impact can be
        seen globally. We specialize in helping our highly-skilled, global
        technology talent <br /> community in emerging markets, connect with
        hundreds of leading companies
      </p>

      <Wrapper>
        <BoxProps
          first='110+'
          second='Countries represented on 6 continents'
          third=''
        />
        <BoxProps first='96%' second='Successful placements' third='' />
        <BoxProps first='70%' second='Faster than ' third='industry standard' />
        <Special>
          <BoxProps
            first='175,000+'
            second='Technologists represented'
            third=''
          />
          <BoxProps first='18+' second='Months ' third='Average engagement' />
        </Special>
      </Wrapper>
      <Btn>
        <Buttons
          br='70px'
          bd='1px solid black'
          bg=''
          wide='300px'
          length='70px'
          cc='#383B3F'>
          Apply for Remote Jobs
        </Buttons>
        <Buttons
          br='70px'
          bd=''
          bg='#56C870'
          wide='200px'
          length='70px'
          cc='#383B3F'>
          Hire Talent
        </Buttons>
      </Btn>
    </Container>
  );
};

export default MeaningfulWork;

const Container = styled.div`
  width: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
const Special = styled.div`
  width: 60%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px;
  /* background-color: red; */
`;
const Buttons = styled.div<{
  wide: string;
  br: string;
  bg: string;
  cc: string;
  bd: string;
  length: string;
}>`
  font-size: 20px;
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
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
