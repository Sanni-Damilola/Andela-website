/** @format */

import React from "react";
import styled from "styled-components";

interface Iprops {
  bg: string;
  name: string;
  testify: string;
  profile: string;
  country: string;
}
const SliderCard: React.FC<Iprops> = ({
  bg,
  name,
  testify,
  profile,
  country,
}) => {
  return (
    <Container>
      <Card bg={bg}>
        <ProfileContainer>
          <Profile src={profile} />
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
    font-weight: 400;
    line-height: 25px;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.img`
  height: 50px;
  width: 50px;
  /* background-color: blue; */
  border-radius: 50%;
`;
const Name = styled.div`
  color: #3d444a;
  font-weight: 900;
  font-size: 20px;
`;
const Country = styled.div`
  color: #3d444a;
  font-weight: 300;
`;
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin-left: 10px;
`;
const Container = styled.div``;
