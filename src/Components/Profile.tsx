/** @format */

import React from "react";
import styled from "styled-components";
import Sachin from "./Assets/Sachin-Bhagwat-187x200.jpeg";
import michael from "./Assets/msheadshot200x200.png";
import mike from "./Assets/Mike-Ndimurukundo-187x200.jpg";
import vitri from "./Assets/Vitri-Bhandari-187x200.jpg";
import tisbe from "./Assets/Tisbe-Galindo-1436x1536.jpg";
import mary from "./Assets/Mary-Decker-187x200.jpg";
import kevin from "./Assets/Kirsten-Canton-187x200.jpg";
import alvaro from "./Assets/Alvaro-Oliveira-187x200.jpg";
import kristen from "./Assets/Kirsten-Canton-187x200.jpg";
import girl from "./Assets/courtney-machi-headshot-150x150.jpeg";
import jeremy from "./Assets/Jeremy-Johnson-187x200.jpg";
import jeff from "./Assets/JeffPedersen.png";
import ProfilesProps from "./ProfilesProps";

const Profile = () => {
  return (
    <Container>
      <h1>
        Brilliant minds and companies come <br />
        together to build the future
      </h1>
      <p>
        Meet the team dedicated to helping the world’s best <br />
        companies build the world’s best teams.
      </p>
      <Wrapper>
        <ProfilesProps
          img={jeremy}
          name1='Jeremy Johnson'
          name2=''
          position1='Co-Founder & CEO'
          position2=''
          col='#ECEDFD'
        />
        <ProfilesProps
          img={vitri}
          name1='Vitri Bhandari'
          name2=''
          position1='Chief People Officer'
          position2=''
          col='#B0D6CE'
        />
        <ProfilesProps
          img={mary}
          name1='Mary Decker'
          name2=''
          position1='Chief of Staff'
          position2=''
          col='#FDF0DC'
        />
        <ProfilesProps
          img={jeff}
          name1='Jeff Pedersen'
          name2=''
          position1='Chief Financial Officer'
          position2=''
          col='#B0D6CE'
        />
        <ProfilesProps
          img={alvaro}
          name1='Alvaro Oliveira'
          name2=''
          position1='Chief Network Officer'
          position2=''
          col='#ECEDFD'
        />
        <ProfilesProps
          img={Sachin}
          name1='Sachin Bhagwat'
          name2=''
          position1='Chief Revenue Officer'
          position2=''
          col='#FDF0DC'
        />
        <ProfilesProps
          img={michael}
          name1='Michael '
          name2='Starkenburg'
          position1='Chief Product and'
          position2=' Technology Officer'
          col='#ECEDFD'
        />
        <Hold>
          <ProfilesProps
            img={girl}
            name1='Courtney Machi'
            name2=''
            position1='VP of Product'
            position2=''
            col='#B0D6CE'
          />
          <ProfilesProps
            img={kevin}
            name1='Kevin Pope'
            name2=''
            position1='VP of Engineering'
            position2=''
            col='#FDF0DC'
          />
          <ProfilesProps
            img={tisbe}
            name1='Tisbe Galindo'
            name2=''
            position1='EVP, Financial Planning'
            position2=''
            col='#B0D6CE'
          />
          <ProfilesProps
            img={kristen}
            name1='Kirsten Canton'
            name2=''
            position1='EVP, General Counsel'
            position2=''
            col='#ECEDFD'
          />
          <ProfilesProps
            img={mike}
            name1='Mike'
            name2=' Ndimurukundo'
            position1='Managing Director,'
            position2=' Rwanda'
            col='#FDF0DC'
          />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97%;
`;
