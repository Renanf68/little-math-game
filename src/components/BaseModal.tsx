import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalCard = styled.div`
  width: 100%;
  max-width: 312px;
  background-color: white;
  padding: 24px 16px;
  border-radius: 8px;
  z-index: 110;
  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: 0.2s linear scaleUp;
`;

interface BaseModalProps {
  children: React.ReactNode;
}

export const BaseModal = ({ children }: BaseModalProps) => {
  return (
    <ModalBox>
      <ModalCard>{children}</ModalCard>
    </ModalBox>
  );
};
