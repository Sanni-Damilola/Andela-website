/** @format */

import React from "react";
import styled from "styled-components";

interface Iprops {
  bg: string;
  name: string;
  testify: string;
  logo: string;
  country: string;
}
const SliderCard: React.FC<Iprops> = ({ bg, name, testify, country, logo }) => {
  return (
    <Container>
      <Card bg={bg}>
        <ProfileContainer>
          <Logo src={logo} />
          <Bio>
            <Name>{name}</Name>
            <Country>{country}</Country>
          </Bio>
        </ProfileContainer>
        <p>{testify}</p>
      </Card>
    </Container>
  );
};

export default SliderCard;

const Card = styled.div<{ bg: string }>`
  height: 220px;
  width: 220px;
  background: ${(props) => props.bg};
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin: 10px;
  border-radius: 10px;
  p {
    color: #3d444a;
    font-weight: 300;
    line-height: 25px;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 60px;
  width: 150px;
  /* background-color: blue; */
`;
const Name = styled.div`
  margin-left: 20px;
`;
const Country = styled.div``;
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin-left: 5px;
`;
const Container = styled.div``;
