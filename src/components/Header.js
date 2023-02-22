import React from "react";
import styled from "styled-components";
import { TbBuildingChurch } from "react-icons/tb";
  
export default function Header() {
  return (
    <MainContainer> 
      <MiddleContainer>
        <FirstBox>
          <ChurchLogo><TbBuildingChurch size={35} color={"white"}/></ChurchLogo>
          <ChurchName>Young's Church</ChurchName>
        </FirstBox>
     
      </MiddleContainer>
    </MainContainer>
  );
};


 
const MainContainer = styled.header`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #e8e8e8;
`; 

const MiddleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width:700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FirstBox = styled.div`
  display: flex;
  align-items: center;
  margin: 8px auto;
  height: 27px;
  z-index: 20;
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


