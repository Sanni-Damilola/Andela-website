/** @format */

import React from "react";
import styled from "styled-components";
import image from "./Assets/andela-commmunity-video-profile-play-1024x576.jpg";

const VibrantCommunity = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Our vibrant community</h1>
        <p>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</p>
        <Image>
          <img src={image} alt='' />
        </Image>
      </Wrapper>
    </Container>
  );
};

export default VibrantCommunity;

const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Wrapper = styled.div`
  width: 60%;
  /* height: 400px; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  h1 {
    font-size: 40px;
    font-style: italic;
  }
  p {
    font-size: 20px;
  }
`;
const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
