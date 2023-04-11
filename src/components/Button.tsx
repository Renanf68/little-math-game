import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  margin-top: 14px;
  width: 100%;
  height: 50px;
`;

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <ButtonStyled {...props} />;
};
