import React from 'react';
import cousera from "./Assets/coursera-logo.svg";
import github from "./Assets/github-logo.svg"
import goldman from "./Assets/goldman-sachs-logo.svg"
import invision from "./Assets/invision-logo.svg"
import kraft from "./Assets/Kraft-Heinz-Logo.svg"
import seismic from "./Assets/seismic-logo.svg";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Container>
        <h1>Trusted by</h1>
        <Wrapper>
            <img src={github} alt="" />
            <img src={invision} alt="" />
            <img src={cousera} alt="" />
            <img src={kraft} alt="" />
            <img src={seismic} alt="" />
            <img src={goldman} alt="" />
        </Wrapper>
    </Container>
  )
}

export default Trusted;

const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color: #E0F1EB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    h1{
        color: #173B3F;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    /* margin-top: 5px; */
`;