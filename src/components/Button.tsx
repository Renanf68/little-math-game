import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const ButtonStyled = styled.button<ButtonProps>`
  margin-top: 14px;
  width: 100%;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.green
      : props.theme.colors.blue};
  color: white;
  border: none;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 700;
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
  ({ variant = "primary", ...props }: ButtonProps, ref) => {
    return <ButtonStyled ref={ref} variant={variant} {...props} />;
  }
);
