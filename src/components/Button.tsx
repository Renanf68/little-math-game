import React from "react";
import styled from "styled-components";
import { IconType } from "../types";
import { Icon } from "./Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: IconType;
}

const ButtonStyled = styled.button<ButtonProps>`
  margin-top: 14px;
  width: 100%;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.variant === "primary" ? props.theme.colors.purple : "none"};
  color: white;
  border: none;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.gray};
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
        {icon && <Icon icon={icon} />}
        {children}
      </ButtonStyled>
    );
  }
);
