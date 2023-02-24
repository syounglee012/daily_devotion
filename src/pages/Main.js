import React from "react";
import PageMove from "../components/PageMove";
import Passage from "../components/Passage";
import styled from "styled-components";

function Main({ focusRef, passages, now, tomorrowHandler, yesterdayHandler }) {
  return (
    <Container ref={focusRef}>
      <Passage passages={passages} now={now} />

      <PageMove
        tomorrowHandler={tomorrowHandler}
        yesterdayHandler={yesterdayHandler}
      />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 6rem;
  padding-top: 5rem;
 

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
