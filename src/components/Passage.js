import React from "react";
import styled from "styled-components";
import Audio from "./Audio";

export default function Passage({ passages, now }) {
  
  return (
    <Container>
      <ContextContainer >
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
  margin: 20px auto 40px;
  
`;

const ContextContainer = styled.div`
  max-width: 560px;
  padding: 0 32px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  @media screen and (max-width:700px) {
    font-size: 34px;
  }
`;

const Context = styled.div`
  width: 100%;
`;
const MiddleContainer = styled.div`
  display: flex;
`;
const ContextTitle = styled.span`
  font-size: 36px;
  font-weight: 300;
  margin: 0;
  display: inline;
  @media screen and (max-width:700px) {
    font-size: 26px;
  }
`;

const DateAndTime = styled.p`
  margin-top: 0;
  margin-bottom: 1.8675rem;
  font-weight: 100;
  font-size: 18px;
  font-style: italic;
  color: #777;
  @media screen and (max-width:700px) {
    font-size: 16px;
  }
`;

const TodaysMessage = styled.div`
  color: #555555;
  font-size: 18px;
  font-weight: 300;
  @media screen and (max-width:700px) {
    font-size: 16px;
  }

  & h2 {
    font-size: 0;
  }
`;
