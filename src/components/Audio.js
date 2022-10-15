import React from "react";
import styled from "styled-components";
import { ImHeadphones } from "react-icons/im";

const Audio = ({ passages }) => {
  const audio = passages?.passages?.[0].split(" ")?.[7]?.slice(6, -1);
  return (
    <AudioContainer>
      <a key={passages?.id} href={audio} passHref>
        <ImHeadphones />
      </a>
    </AudioContainer>
  );
};

export default Audio;

const AudioContainer = styled.div`
  padding: 20px 0 0 10px;
`;
