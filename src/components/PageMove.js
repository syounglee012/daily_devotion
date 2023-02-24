import React from "react";
import styled from "styled-components";

const PageMove = ({ tomorrowHandler, yesterdayHandler }) => {
  return (
    <PageMoveContainer>
      <div>
        <Button className="btn-arrow-left" onClick={yesterdayHandler}></Button>
      </div>

      <div>
        <Button className="btn-arrow-right" onClick={tomorrowHandler}></Button>
      </div>
    </PageMoveContainer>
  );
};

export default PageMove;

const PageMoveContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (max-width: 750px) {
    max-width: 500px;
  }
  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0.75rem;
  position: relative;
  width: 2rem;
  height: 2rem;
  background-color: rgba(black, 0.05);
  transition: all 150ms ease-out;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    background-color: #606060;

    transition: all 150ms ease-out;
  }

  &::before {
    width: 75%;
    height: 25%;
  }

  &::after {
    width: 25%;
    height: 75%;
  }

  &:hover,
  &:focus {
    background-color: rgba(black, 0.1);

    &::before,
    &::after {
      background-color: #404040;
    }
  }

  &.btn-arrow-left,
  &.btn-arrow-right {
    &::before,
    &::after {
      top: 12.5%;
      left: 12.5%;
    }
  }

  &.btn-arrow-left {
    transform: rotate(-45deg);
  }

  &.btn-arrow-right {
    transform: rotate(135deg);
  }
`;
