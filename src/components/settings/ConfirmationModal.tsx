// import styled from "styled-components";
import React from "react";
import { BaseModal } from "../BaseModal";
import { Button } from "../Button";
import { Text } from "../Text";
import styled from "styled-components";
import { useUserContext } from "../../context";
import { SettingsAction } from "../../types";
import close from "../../images/close-circle.png";

const ModalContet = styled.div`
  /* width: fill-available; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0 16px;
`;

const ImageBox = styled.div`
  width: fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
const BtnWrapper = styled.div`
  margin-top: 12px;
  width: fill-available;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ConfirmationModalProps {
  action: SettingsAction;
  onClose(): void;
}

export const ConfirmationModal = ({
  action,
  onClose,
}: ConfirmationModalProps) => {
  // context
  const { clearUserData, deleteUserProfile } = useUserContext();
  // handlers
  const handleAction = React.useCallback(() => {
    if (action === "clear") clearUserData();
    else if (action === "delete") deleteUserProfile();
  }, [action, clearUserData, deleteUserProfile]);
  // UI
  return (
    <BaseModal>
      <ModalContet>
        <ImageBox>
          <img
            src={close}
            alt="X dentro de um círculo"
            width="40px"
            height="40px"
          />
        </ImageBox>
        {action === "clear" ? (
          <Text fontSize="2xl" fontWeight="500" textAlign="center">
            Deseja limpar os dados do seu usuário?
          </Text>
        ) : (
          <Text fontSize="2xl" fontWeight="500" textAlign="center">
            Deseja deletar o seu usuário?
          </Text>
        )}
      </ModalContet>
      <BtnWrapper>
        <Button variant="secondary" onClick={onClose}>
          Voltar
        </Button>
        <Button marginLeft="16px" variant="danger" onClick={handleAction}>
          Confirmar
        </Button>
      </BtnWrapper>
    </BaseModal>
  );
};
