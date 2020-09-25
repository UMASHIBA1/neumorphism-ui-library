import React from "react";
import styled from "styled-components";
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
      <NormalBox />
      <InsetBox />
    </Wrapper>
  );
};

export default Home;
