import React from "react";
import styled from "styled-components";

const TextStyled = styled.p`
  margin-top: 14px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 500;
`;

export const Text = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <TextStyled {...props} />;
};
