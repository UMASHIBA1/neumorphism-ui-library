import React from "react";
import styled from "styled-components";
import { bgColor } from "../cssProps/colors";
import { insetShadow } from "../cssProps/shadow";

const Wrapper = styled.div`
  width: 300px;
  height: 160px;
  ${insetShadow(2)}
  ${bgColor}
`;

const InsetBox: React.FC = () => <Wrapper></Wrapper>;

export default InsetBox;
