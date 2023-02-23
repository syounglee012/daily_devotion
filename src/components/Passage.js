import React from "react";
import styled from "styled-components";
import Audio from "./Audio";

export default function Passage({ passages, now }) {
  return (
    <Container>
      <ContextContainer>
        <Title>Proverbs Daily Devotion</Title>
        <Context>
          <MiddleContainer>
            <ContextTitle>{passages?.canonical}</ContextTitle>
            <Audio passages={passages} />
          </MiddleContainer>
          <DateAndTime>{now}</DateAndTime>
          <TodaysMessage
            dangerouslySetInnerHTML={{ __html: passages?.passages?.[0] }}
          ></TodaysMessage>
        </Context>
      </ContextContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 7rem;
  width: 100%;

`;

const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 650px;
  @media screen and (max-width: 700px) {
   max-width: 350px;
  }
 
`;

const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  font-weight: 600;
  @media screen and (max-width: 700px) {
    font-size: 34px;
  }
`;

const Context = styled.div`
  width: 100%;
`;
const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
`;
const ContextTitle = styled.span`
  width: fit-content;
  color: white;
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  display: inline;
  @media screen and (max-width: 700px) {
    font-size: 26px;
  }
`;

const DateAndTime = styled.p`
width: 100%;
  margin-top: 0;
  margin-bottom: 1.8675rem;
  font-weight: 300;
  font-size: 18px;
  font-style: italic;
  color: white;
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

const TodaysMessage = styled.div`
  color: white;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5rem;

  & a {
    color: #0096ff;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }

  & h2 {
    font-size: 0;
  }
`;
