// import styled from "styled-components";
import { BaseModal } from "./BaseModal";
import { Button } from "./Button";

interface FeedbackModalProps {
  isCorrect: boolean;
  onClose(): void;
}

export const FeedbackModal = ({ isCorrect, onClose }: FeedbackModalProps) => {
  return (
    <BaseModal>
      <h3>Feedback!</h3>
      {isCorrect ? (
        <p>Resposta correta! + 10 pontos</p>
      ) : (
        <p>Passou perto! Tenta de novo?</p>
      )}
      <Button onClick={onClose}>Continuar</Button>
    </BaseModal>
  );
};
