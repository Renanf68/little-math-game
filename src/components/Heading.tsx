import React from "react";
import styled from "styled-components";

const HeadingStyled = styled.h1`
  margin-top: 14px;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 700;
`;

export const Heading = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <HeadingStyled {...props} />;
};
