/** @format */

import React from "react";
import styled from "styled-components";

interface profileCard {
  img: string;
  col: string;
  name1: string;
  name2: string;
  position1: string;
  position2: string;
}

const ProfilesProps: React.FC<profileCard> = ({
  img,
  col,
  name1,
  name2,
  position1,
  position2,
}) => {
  return (
    <Card>
      <Picture>
        <img src={img} alt='' />
      </Picture>
      <Bio col={col}>
        <Wrap>
          <h4>
            {name1} <br /> {name2}
          </h4>
          <p>
            {" "}
            {position1} <br /> {position2}
          </p>
        </Wrap>
      </Bio>
    </Card>
  );
};

export default ProfilesProps;

const Card = styled.div`
  width: 170px;
  height: 290px;
  background-color: green;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const Picture = styled.div`
  width: 170px;
  height: 160px;
  /* background-color: red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Bio = styled.div<{ col: string }>`
  width: 170px;
  height: 130px;
  background-color: ${(props) => props.col};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h4 {
    font-size: 20px;
    margin-top: -3px;
    /* background-color: yellow; */
  }
  p {
    font-size: 15px;
    margin-top: -20px;
    /* background-color: green; */
  }
`;
const Wrap = styled.div`
  width: 150px;
  height: 110px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
