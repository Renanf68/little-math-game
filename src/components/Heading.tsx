import React from "react";
import styled from "styled-components";
import { BaseTextProps } from "../types";

const HeadingStyled = styled.h1<BaseTextProps<HTMLHeadingElement>>`
  margin-top: ${(props) => props.marginTop ?? 0};
  margin-bottom: ${(props) => props.marginBottom ?? 0};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize["4xl"]};
  font-weight: ${(props) => props.fontWeight ?? 500};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.colors.gray};
`;

export const Heading = (props: BaseTextProps<HTMLHeadingElement>) => {
  return <HeadingStyled {...props} />;
};
