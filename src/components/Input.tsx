import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  margin-top: 14px;
  border: 1px solid;
  padding: 0 14px;
  width: fill-available;
  height: 50px;
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyled {...props} />;
};
