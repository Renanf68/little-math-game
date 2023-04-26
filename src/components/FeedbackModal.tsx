// import styled from "styled-components";
import React from "react";
import { BaseModal } from "./BaseModal";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface FeedbackModalProps {
  isCorrect: boolean;
  upgradeLevel?: boolean;
  onClose(): void;
}

export const FeedbackModal = ({
  isCorrect,
  upgradeLevel,
  onClose,
}: FeedbackModalProps) => {
  // refs
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  // side effects
  React.useEffect(() => {
    buttonRef.current?.focus();
  }, []);
  // UI
  return (
    <BaseModal>
      <Heading>Feedback!</Heading>
      {isCorrect ? (
        <Text>Resposta correta! + 10 pontos</Text>
      ) : (
        <Text>Passou perto! Tenta de novo?</Text>
      )}
      {upgradeLevel ? (
        <Text>Parabéns, você avançou de nível!</Text>
      ) : upgradeLevel === false ? (
        <Text>Você precisa recomeçar =/</Text>
      ) : (
        <></>
      )}
      <Button ref={buttonRef} onClick={onClose}>
        Continuar
      </Button>
    </BaseModal>
  );
};
