import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { IconType } from "../types";
import { Icon } from "./Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: IconType;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  fontSize?: keyof DefaultTheme["fontSize"];
}

const ButtonStyled = styled.button<ButtonProps>`
  margin-top: ${(props) => props.marginTop ?? 0};
  margin-bottom: ${(props) => props.marginBottom ?? 0};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  padding: 0 16px;
  width: 100%;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.purple
      : props.variant === "danger"
      ? props.theme.colors.pink
      : "transparent"};
  color: ${(props) =>
    props.variant !== "secondary" ? "white" : props.theme.colors.purple};
  border: ${(props) => (props.variant !== "secondary" ? "none" : "1px solid")};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.xl};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.lightPurple};
    cursor: not-allowed;
  }
`;

// export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
//   return <ButtonStyled variant={variant} {...props} />;
// };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", icon, children, ...props }: ButtonProps, ref) => {
    return (
      <ButtonStyled ref={ref} variant={variant} {...props}>
        {icon && <Icon as={icon} />}
        {children}
      </ButtonStyled>
    );
  }
);
