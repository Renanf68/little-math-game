import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  margin-top: 14px;
  border: 1px solid;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0 14px;
  width: fill-available;
  height: 50px;
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: ${(props) => (props.type === "number" ? "end" : "start")}; ;
`;

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
  return <InputStyled ref={ref} {...props} />;
});
