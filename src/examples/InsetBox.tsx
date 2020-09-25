import React from "react";
import styled from "styled-components";
import { background } from "../cssProps/background";
import { insetShadow } from "../cssProps/shadow";

const Wrapper = styled.div`
  width: 300px;
  height: 160px;
  ${insetShadow(2)}
  ${background}
`;

const InsetBox: React.FC = () => <Wrapper></Wrapper>;

export default InsetBox;
