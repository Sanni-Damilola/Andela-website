/** @format */

import React from "react";
import styled from "styled-components";
import hero from "./Assets/heropic.jpeg";
import andela from "./Assets/andela-logo.svg";
import andela2 from "./Assets/andela-logo2.svg";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = React.useState<boolean>(false);

  const changeHeader = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <>
      {show ? (
        <Container bg='white' cc='black'>
          <Wrapper>
            <Log to='/'>
              <Logo src={andela2} />
            </Log>
            <Navigation cn='black'>
              <Nav to='expert' cl='black'>
                For Technology Experts
              </Nav>
              <Nav to='business' cl='black'>
                Business
              </Nav>
              <Nav to='' cl='black'>
                Enterprise
              </Nav>
              <Nav to='about' cl='black'>
                About Us
              </Nav>
            </Navigation>
            <Btn>
              <Button
                br='50px'
                bg=''
                bd='1px solid black'
                wide='180px'
                cc='black'>
                Apply for Jobs
              </Button>
              <Button br='50px' bd='' bg='#56C870' wide='150px' cc='black'>
                Hire Talent
              </Button>
            </Btn>
          </Wrapper>
        </Container>
      ) : (
        <Container bg='' cc=''>
          <Wrapper>
            <Log to='/'>
              <Logo src={andela} />
            </Log>
            <Navigation cn='white'>
              <Nav to='expert' cl='white'>
                For Technology Experts
              </Nav>
              <Nav to='business' cl='white'>
                Business
              </Nav>
              <Nav to='' cl='white'>
                Enterprise
              </Nav>
              <Nav to='about' cl='white'>
                About Us
              </Nav>
            </Navigation>
            <Btn>
              <Button
                br='50px'
                bg=''
                bd='1px solid white'
                wide='180px'
                cc='white'>
                Apply for Jobs
              </Button>
              <Button br='50px' bd='' bg='#56C870' wide='150px' cc='black'>
                Hire Talent
              </Button>
            </Btn>
            <Menu>
              <FiMenu />
            </Menu>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 420px) {
    display: block;
    color: white;
    font-size: 40px;
  }
  @media screen and (max-width: 320px) {
    display: block;
    color: white;
    font-size: 40px;
  }

  @media screen and (max-width: 960px) {
    color: white;
    display: block;
    font-size: 40px;
  }
`;
const Container = styled.div<{ bg: string; cc: string }>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cc};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-size: 19px;
  position: fixed;
  z-index: 999;
  top: 0;

  @media screen and (max-width: 320px) {
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  color: white;
  font-size: 20px;
`;
const Log = styled(NavLink)`
  width: 15%;
  height: 80%;
  @media screen and (max-width: 420px) {
    margin-left: 30px;
    width: 20%;
    height: 80%;
  }

  @media screen and (max-width: 960px) {
    margin-left: 30px;
    width: 30%;
    height: 80%;
  }
  /* background-color: blue; */
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
const Navigation = styled.div<{ cn: string }>`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.cn};

  @media screen and (max-width: 420px) {
    display: none;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }

  /* background-color: blue; */
`;
const Nav = styled(NavLink)<{ cl: string }>`
  transition: all 350ms;
  text-decoration: none;
  color: ${(props) => props.cl};

  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
const Btn = styled.div`
  width: 27%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    display: none;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Button = styled.div<{
  wide: string;
  br: string;
  bg: string;
  cc: string;
  bd: string;
}>`
  font-size: 20px;
  width: ${(props) => props.wide};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cc};
  border: ${(props) => props.bd};
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
