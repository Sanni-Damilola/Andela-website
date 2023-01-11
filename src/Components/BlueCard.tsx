import React from 'react';
import styled from "styled-components";

interface box{
    first: string;
    second: string;
    third: string
}


const BlueCard: React.FC<box> = ({first, second, third}) => {
    return (
      <Container>
          <h1>
              {first}<br /> <span>{second} <br /> {third}</span>
          </h1>
      </Container>
    )
  }


export default BlueCard;

const Container = styled.div`
    width: 400px;
    height: 300px;
    background-color: #B0D6CE;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        text-align: center;
    }
    span{
        font-weight: 200;
        font-size: 18px;
        letter-spacing: 2px;
    }
`;