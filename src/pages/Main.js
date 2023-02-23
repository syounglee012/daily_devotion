import React from "react";
import Header from "../components/Header";
import PageMove from "../components/PageMove";
import Passage from "../components/Passage";
import styled from "styled-components";

function Main({ focusRef, passages, now, tomorrowHandler, yesterdayHandler }) {
  return (
    <Container ref={focusRef}>
      <Header />
      <Wrap>
        <Passage passages={passages} now={now} />

        <div className="pageMove">
          <PageMove
            tomorrowHandler={tomorrowHandler}
            yesterdayHandler={yesterdayHandler}
          />
        </div>
      </Wrap>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  background: url("Bible1.jpeg") no-repeat center center/cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;

  .pageMove {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10rem 0 0;
  }

  @media (max-width: 1300px) {
    background-position: 60% 70%;
  }

  @media (max-width: 900px) {
    background-position: 66% 70%;
    
    .pageMove {
      padding: 0;
    }
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Wrap = styled.div``;
