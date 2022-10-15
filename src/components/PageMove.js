import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const PageMove = ({ tomorrowHandler, yesterdayHandler }) => {
  return (
    <PageMoveContainer>
      <div>
        <Button onClick={yesterdayHandler} >
          <Icon>
            <AiOutlineArrowLeft size={"20px"} color={"blue"}/>
          </Icon>
          prev
        </Button>
      </div>

      <div>
        <Button onClick={tomorrowHandler}>
          next
          <Icon>
            <AiOutlineArrowRight size={"20px"} color={"blue"}/>
          </Icon>
        </Button>
      </div>
    </PageMoveContainer>
  );
};

export default PageMove;

const PageMoveContainer = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  justify-content: space-between;

  .prev {
    cursor: pointer;
    font-size: 20px;
    border: 0;
    background-color: transparent;
    display: flex;
  }
  .next {
    cursor: pointer;
    font-size: 20px;
    border: 0;
    background-color: transparent;
    display: flex;
  }

  @media screen and (max-width: 910px) {
    max-width: 326px;
  }
`;

const Button = styled.button`
cursor: pointer;
    font-size: 20px;
    border: 0;
    background-color: transparent;
    display: flex;
    color: blue;
`;


const Icon = styled.div`
padding-top: 2px;
`;
