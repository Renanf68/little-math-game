import styled from "styled-components";
import { Icon } from "./Icon";

const FlashStyled = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 24px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface FlashButtonProps {
  isFull?: boolean;
  onAction(): void;
}

export const FlashButton = ({ isFull, onAction }: FlashButtonProps) => {
  return (
    <FlashStyled>
      <Icon as="flash" />
    </FlashStyled>
  );
};
