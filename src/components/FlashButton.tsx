import styled from "styled-components";
import { Icon } from "./Icon";
import flashFull from "../images/full-flash.png";
import { useUserContext } from "../context";
import React from "react";

interface FlashStyledProps {
  power: number;
}

const FlashStyled = styled.button<FlashStyledProps>`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  background: ${(props) =>
    `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(${props.theme.colors.purple} ${props.power * 3.6}deg, ${
      props.theme.colors.lighterGray
    } 0deg)`};
`;

const FlashImageBox = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const FlashButton = () => {
  // context
  const { user, fireFlash } = useUserContext();
  // helpers
  const isActive = React.useMemo(() => user?.power === 100, [user?.power]);
  // UI
  if (isActive) {
    return (
      <FlashImageBox onClick={fireFlash}>
        <img src={flashFull} alt="raio ativo" width="100%" />
      </FlashImageBox>
    );
  }
  return (
    <FlashStyled power={user?.power ?? 0}>
      <Icon as="flash" />
    </FlashStyled>
  );
};
