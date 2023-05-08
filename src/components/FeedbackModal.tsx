// import styled from "styled-components";
import React from "react";
import { BaseModal } from "./BaseModal";
import { Button } from "./Button";
import { Text } from "./Text";
import styled, { useTheme } from "styled-components";
import dimond from "../images/diamond.png";
import stamp from "../images/little-stamp.png";
import close from "../images/close-circle.png";
import { useUserContext } from "../context";

interface ResultBadgeProps {
  bgColor: string;
}

const FeedbackContet = styled.div`
  width: fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0 24px;
`;

const ResultBadge = styled.div<ResultBadgeProps>`
  margin-top: 24px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 16px 24px;
  background-color: ${(props) => props.bgColor};
  border-radius: 1000px;
  margin-bottom: 16px;
`;

const DiamondBox = styled.div`
  width: 22px;
  height: 22px;
  margin-top: 4px;
  margin-right: 8px;
`;

const StampBox = styled.div`
  width: 26px;
  height: 26px;
  margin-top: 4px;
  margin-right: 8px;
`;

const CloseBox = styled.div`
  width: 40px;
  height: 40px;
`;

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
  // context
  const theme = useTheme();
  const { user } = useUserContext();
  // refs
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  // side effects
  React.useEffect(() => {
    buttonRef.current?.focus();
  }, []);
  // UI
  return (
    <BaseModal>
      <FeedbackContet>
        {isCorrect ? (
          <>
            <ResultBadge bgColor={theme.colors.lightGreen}>
              <DiamondBox>
                <img src={dimond} alt="diamante verde" width="100%" />
              </DiamondBox>
              <Text fontSize="3xl" fontWeight="500" color={theme.colors.green}>
                +10
              </Text>
            </ResultBadge>
            <Text fontSize="2xl" fontWeight="500">
              Resposta correta!
            </Text>
          </>
        ) : (
          <>
            <ResultBadge bgColor={theme.colors.lighterPink}>
              <CloseBox>
                <img src={close} alt="diamante verde" width="100%" />
              </CloseBox>
            </ResultBadge>
            <Text fontSize="2xl" fontWeight="500">
              Resposta errada :(
            </Text>
          </>
        )}

        {upgradeLevel ? (
          <>
            <ResultBadge bgColor={theme.colors.lightYellow}>
              <StampBox>
                <img src={stamp} alt="selo de novo nível" width="100%" />
              </StampBox>
              <Text fontSize="3xl" fontWeight="500" color={theme.colors.yellow}>
                Nível {user?.level! + 1}
              </Text>
            </ResultBadge>
            <Text fontSize="2xl" fontWeight="500">
              Você avançou de nível!
            </Text>
          </>
        ) : upgradeLevel === false ? (
          <Text>Você precisa recomeçar =/</Text>
        ) : (
          <></>
        )}
      </FeedbackContet>
      <Button ref={buttonRef} onClick={onClose}>
        Continuar
      </Button>
    </BaseModal>
  );
};
