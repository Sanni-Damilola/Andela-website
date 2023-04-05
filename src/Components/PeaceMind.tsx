/** @format */

import React from "react";
import styled from "styled-components";
import PeaceCard from "./PeaceCard";

const PeaceMind = () => {
  return (
    <Container>
      <h1>We offer you peace of mind</h1>
      <h5>
        We understand that sometimes you want to find talent on your own
        <br />
        and other times you want some help. We offer you the freedom to do both.
      </h5>

      <Wrapper>
        <PeaceCard
          name='Source'
          testify='We’ll work with you to fully understand your technical gaps, culture, industry regulations, and strategic route. Instantly view a curated selection of technologist profiles that meet your needs.'
        />
        <PeaceCard
          name='Assess'
          testify='Our proprietary assessments are designed to find you the best talent by role, no matter where they are in the world. Based on your team’s goals, meet vetted technologists you can trust.'
        />
        <PeaceCard
          name='Match'
          testify='Connect within hours, with vetted technologists who can easily align with your existing teams, tools, and workflows. Our matching times are consistently twice as fast compared to industry standards.'
        />
        <PeaceCard
          name='Deliver'
          testify='With a focus on sustainable growth, we’re with you every step of the way. From rapid onboarding and seamless integration to global payroll solutions and compliance support.'
        />
      </Wrapper>
    </Container>
  );
};

export default PeaceMind;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  background-color: #f8f8f8;

  h1 {
    text-align: center;
    font-size: 40px;
    color: #132128;
    font-style: italic;
  }
  h5 {
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    color: #3d444a;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: space-around;
  /* height: 300px; */
  overflow: hidden;
  /* background-color: black; */
`;
