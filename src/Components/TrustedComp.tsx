/** @format */

import React from "react";
import cousera from "./Assets/coursera-logo.svg";
import github from "./Assets/github-logo.svg";
import goldman from "./Assets/goldman-sachs-logo.svg";
import invision from "./Assets/invision-logo.svg";
import kraft from "./Assets/Kraft-Heinz-Logo.svg";
import casper from "./Assets/logo-casper-1-1.png";
import seismic from "./Assets/seismic-logo.svg";
import mastercard from "./Assets/logo-mastercard.png";
import mindshare from "./Assets/logo-mindshare-1.png";
import pluralsight from "./Assets/logo-pluralsight-1.png";
import viacombs from "./Assets/logo-viacomcbs.png";
import jamf from "./Assets/logo-jamf-1.png";
import cloudfare from "./Assets/logo-cloudflare-1.png";
import styled from "styled-components";
import TrustedProps from "./TrustedProps";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustedComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Container>
      <h1>We’re trusted by the best</h1>
      <Wrapper>
        <Slider {...settings}>
          <TrustedProps img={cousera} />
          <TrustedProps img={seismic} />
          <TrustedProps img={goldman} />
          <TrustedProps img={casper} />
          <TrustedProps img={github} />
          <TrustedProps img={mastercard} />
          <TrustedProps img={mindshare} />
          <TrustedProps img={pluralsight} />
          <TrustedProps img={invision} />
          <TrustedProps img={viacombs} />
          <TrustedProps img={jamf} />
          <TrustedProps img={kraft} />
          <TrustedProps img={cloudfare} />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default TrustedComp;

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: #b0d6ce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  h1 {
    color: #173b3f;
    font-style: italic;
    font-size: 30px;
    letter-spacing: 3px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  /* margin-top: 20px; */
  img {
    object-fit: contain;
    width: 20%;
    height: 20%;
  }
`;
