import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  game?: boolean;
}

const InputStyled = styled.input<InputProps>`
  margin-top: 14px;
  border: 1px solid;
  border-radius: 1000px;
  border-color: ${(props) => props.theme.colors.lightGray};
  padding: 0 14px;
  width: ${(props) => (props.game ? "90%" : "fill-available")};
  height: ${(props) => (props.game ? "68px" : "60px")};
  font-size: ${(props) =>
    props.game ? props.theme.fontSize["2xl"] : props.theme.fontSize.lg};
  text-align: ${(props) => (props.type === "number" ? "end" : "start")};
  :focus {
    outline: none;
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.purple};
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />;
  }
);
