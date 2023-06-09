import styled, {css, keyframes} from "styled-components";
import {weight} from "../typography/typography.style";
import React from "react";

interface ButtonMainProps {
    readonly textWeight?: "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
    readonly background:
        "primary" |
        "dark"
    readonly hover:
        | "primary"
        | "dark"
    readonly width?: string;
    readonly children: React.ReactNode;
}

const hover = {
    primary: css`
      background: #0982f4;
      background: linear-gradient(65deg, #0275e1 0, #198ffd 100%)
    `,

    dark: css`
      background: #262a33
    `
}

const background = {
    primary: "#097dea",
    dark: "#242830"
};

export const ButtonMain = styled.button<ButtonMainProps>`
  color: #fff;
  font-weight: ${(props) => props.textWeight && weight[props.textWeight]};
  background: ${(props) => background[props.background]};
  width: ${(props) => props.width};
  display: inline-flex;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  justify-content: center;
  padding: 16px 32px;
  height: 48px;
  text-align: center;
  white-space: nowrap;
  position: relative;

  &:hover {
    ${(props) => hover[props.hover]};
  }

  & > div{
    padding: 16px 23px;
  }
`;


const spin = keyframes`
  100% {transform: rotate(360deg)}
`

export const Spinner = styled.div`
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 8px;
  left: calc(50% - 17px);
  background: transparent;
  box-sizing: border-box;
  border-top: 4px solid white;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 100%;
  animation: ${spin} 0.6s ease-out infinite;
`