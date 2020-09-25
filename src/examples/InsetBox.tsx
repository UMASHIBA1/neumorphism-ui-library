import React, { ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { centerPutChildren } from "../cssProps/centerPutChildren";
import { bgColor } from "../cssProps/colors";
import { insetShadow } from "../cssProps/shadow";

interface Props {
  cssProps?: string | FlattenSimpleInterpolation;
  children?: ReactNode;
}

const Wrapper = styled.div<Props>`
  width: 300px;
  height: 160px;
  ${insetShadow(2)}
  ${bgColor}
  ${centerPutChildren}
  ${({ cssProps }) => cssProps}
`;

const InsetBox: React.FC<Props> = ({ cssProps, children }) => (
  <Wrapper cssProps={cssProps}>{children}</Wrapper>
);

export default InsetBox;
