import React from "react";
import styled from "styled-components";
import { radiusCircle, radiusLg, radiusMd, radiusSm } from "./cssProps/radius";
import InsetBox from "./examples/InsetBox";
import NormalBox from "./examples/NormalBox";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
`;
const Home = () => {
  return (
    <Wrapper>
      <NormalBox cssProps={radiusSm}>roundSm</NormalBox>
      <NormalBox cssProps={radiusMd}>roundMd</NormalBox>
      <NormalBox cssProps={radiusLg}>roundLg</NormalBox>
      <NormalBox cssProps={radiusCircle}>roundCircle</NormalBox>
      <InsetBox />
    </Wrapper>
  );
};

export default Home;
