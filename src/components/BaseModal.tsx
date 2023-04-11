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
`;

const ModalCard = styled.div`
  width: 100%;
  max-width: 312px;
  background-color: white;
  padding: 16px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
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
