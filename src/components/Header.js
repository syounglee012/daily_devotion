import React from "react";
import styled from "styled-components";
import { TbBuildingChurch, TbSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <MainContainer>
      <MiddleContainer>
        <FirstBox>
          <ChurchLogo>
            <TbBuildingChurch size={30} color={"white"} />
          </ChurchLogo>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ChurchName>Young's church</ChurchName>
          </Link>
          <Link to="/search">
            <TbSearch className="search" size={25} color={"white"} />
          </Link>
        </FirstBox>
      </MiddleContainer>
    </MainContainer>
  );
}

const MainContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
  background-color: black;
  opacity: 0.7;
`;

const MiddleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FirstBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 8px auto;
  height: 27px;
  z-index: 20;

  .search {
    position: fixed;
    top: 3%;
    right: 3%;
    :hover {
      color: #0096ff;
    }
  }
`;

const ChurchLogo = styled.div`
  width: 25px;
  height: 100%;
  margin: 0;
`;

const ChurchName = styled.h3`
  color: white;
  margin: 10px 0 0 20px;

`;
