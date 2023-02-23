import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Passage from "../components/Passage";
import styled from "styled-components";

function Main({ focusRef, passages, now, tomorrowHandler, yesterdayHandler }) {
  return (
    <Container ref={focusRef}>
      <Header />
      <div className="main-container">
        <Passage passages={passages} now={now} />
        <PageMove
          tomorrowHandler={tomorrowHandler}
          yesterdayHandler={yesterdayHandler}
        />
      </div>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  background: url("Bible1.jpeg") no-repeat center center/cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .main-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1300px) {
    background-position: 60% 70%;
  }

  @media (max-width: 900px) {
    background-position: 66% 70%;
  }
`;
