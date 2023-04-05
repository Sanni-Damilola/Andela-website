/** @format */

import React from "react";
import styled from "styled-components";

const Youtube = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Transforming lives through technology</h1>

        <Image>
          <iframe
            width='640'
            height='360'
            src='https://www.youtube.com/embed/84_qZc1-R5M'
            title='Andela | Connecting Brilliance and Opportunity'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
        </Image>
      </Wrapper>
    </Container>
  );
};

export default Youtube;

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
`;
const Image = styled.div``;
