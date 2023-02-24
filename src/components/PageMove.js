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
            <AiOutlineArrowLeft size={"20px"} color={"white"}/>
          </Icon>
          prev
        </Button>
      </div>

      <div>
        <Button onClick={tomorrowHandler}>
          next
          <Icon>
            <AiOutlineArrowRight size={"20px"} color={"white"}/>
          </Icon>
        </Button>
      </div>
    </PageMoveContainer>
  );
};

export default PageMove;

const PageMoveContainer = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
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

  @media screen and (max-width: 750px) {
    max-width:500px;
  }
  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const Button = styled.button`
cursor: pointer;
    font-size: 20px;
    border: 0;
    background-color: transparent;
    display: flex;
    color: lightblue;
    margin-bottom: 5rem;
    :hover{
      color:#0096FF;
    }
`;


const Icon = styled.div`
padding-top: 2px;
`;
