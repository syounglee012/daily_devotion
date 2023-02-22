import React from "react";
import styled from "styled-components";
import Audio from "./Audio";

export default function Passage({ passages, now }) {
  // const esv = passages?.passages?.[0]
  //   .split(" ")
  //   .reverse()[1]
  //   .split("=")[1]
  //   .slice(1, -1);
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
          {/* <span className="esv" onClick={() => window.open(`${esv}`)}>
            ESV
          </span> */}
        </Context>
      </ContextContainer>
    </Container>
  );
}

const Container = styled.div``;

const ContextContainer = styled.div`
  max-width: 560px;
  padding: 0 7rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
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
`;
const ContextTitle = styled.span`
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
