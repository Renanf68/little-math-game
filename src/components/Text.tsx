import React from "react";
import styled from "styled-components";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  centered?: boolean;
}

const TextStyled = styled.p<TextProps>`
  margin-top: 14px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 500;
  text-align: ${(props) => (props.centered ? "center" : "initial")};
`;

export const Text = (props: TextProps) => {
  return <TextStyled {...props} />;
};
