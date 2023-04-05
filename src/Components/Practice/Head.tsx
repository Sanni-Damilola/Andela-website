/** @format */

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Head = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Nav to='/'>Home</Nav>
          <Nav to='/about'>About</Nav>
          <Nav to='/contact'>Contact</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Head;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  /* color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-size: 19px;
  position: fixed;
  z-index: 999;
  top: 0;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 80px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  font-size: 20px;
`;
const Log = styled.div`
  width: 20%;
  height: 80%;
  /* background-color: blue; */
  margin-left: 30px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
const Navigation = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* color: black; */

  /* background-color: blue; */
`;
const Nav = styled(NavLink)`
  transition: all 350ms;
  color: white;
  text-decoration: none;

  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
