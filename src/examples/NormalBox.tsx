import React from "react";
import styled from "styled-components";
import { background } from "../cssProps/background";
import { normalShadow } from "../cssProps/shadow";

const Wrapper = styled.div`
  width: 300px;
  height: 160px;
  ${normalShadow(2)}
  ${background}
`;

const NormalBox: React.FC = () => <Wrapper></Wrapper>;

export default NormalBox;
