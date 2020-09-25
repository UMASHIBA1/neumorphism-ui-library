import React, { ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { background } from "../cssProps/background";
import { centerPutChildren } from "../cssProps/centerPutChildren";
import { normalShadow } from "../cssProps/shadow";

interface Props {
  cssProps?: string | FlattenSimpleInterpolation;
  children?: ReactNode;
}

const Wrapper = styled.div<Props>`
  width: 300px;
  height: 160px;
  margin: 12px;
  ${normalShadow(2)}
  ${background}
  ${centerPutChildren}
  ${({ cssProps }) => cssProps}
`;

const NormalBox: React.FC<Props> = ({ cssProps, children }) => (
  <Wrapper cssProps={cssProps}>{children}</Wrapper>
);

export default NormalBox;
