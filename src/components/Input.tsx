import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  game?: boolean;
}

const InputStyled = styled.input<InputProps>`
  margin-top: 14px;
  border: 1px solid;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0 14px;
  width: ${(props) => (props.game ? "90%" : "fill-available")};
  height: ${(props) => (props.game ? "68px" : "50px")};
  font-size: ${(props) =>
    props.game ? props.theme.fontSize["2xl"] : props.theme.fontSize.lg};
  text-align: ${(props) => (props.type === "number" ? "end" : "start")};
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />;
  }
);
