import React from "react";
import styled from "styled-components";
import { radiusCircle, radiusLg, radiusMd, radiusSm } from "./cssProps/radius";
import InsetBox from "./examples/InsetBox";
import NormalBox from "./examples/NormalBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 64px;
  > * {
    margin: 12px;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <NormalBox cssProps={radiusSm}>radiusSm</NormalBox>
      <NormalBox cssProps={radiusMd}>radiusMd</NormalBox>
      <NormalBox cssProps={radiusLg}>radiusLg</NormalBox>
      <NormalBox cssProps={radiusCircle}>radiusCircle</NormalBox>
      <InsetBox cssProps={radiusSm}>radiusSM</InsetBox>
      <InsetBox cssProps={radiusMd}>radiusMd</InsetBox>
      <InsetBox cssProps={radiusLg}>radiusLg</InsetBox>
      <InsetBox cssProps={radiusCircle}>radiusCircle</InsetBox>
    </Wrapper>
  );
};

export default Home;
