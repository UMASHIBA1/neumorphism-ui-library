import { css } from "styled-components";
import { darkShadow, whiteShadow } from "../constants/shadows";

export const insetShadow = (offset: number) => css`
  box-shadow: inset ${offset}px ${offset}px ${offset * 2}px ${darkShadow},
    inset -${offset}px -${offset}px ${offset * 2}px ${whiteShadow};
`;

export const normalShadow = (offset: number) => css`
  box-shadow: ${offset}px ${offset}px ${offset * 2}px ${darkShadow},
    -${offset}px -${offset}px ${offset * 2}px ${whiteShadow};
`;
