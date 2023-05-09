import styled, { useTheme } from "styled-components";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Button } from "../Button";
import { ConfirmationModal } from "./ConfirmationModal";
import React from "react";
import { SettingsAction } from "../../types";
import { PageLayout } from "../PageLayout";
import { SettingsFooter } from "./SettingsFooter";

const SettingsStyled = styled.div`
  flex: 1;
  width: fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 96px;
`;

const FeatureCard = styled.div`
  margin-top: 16px;
  width: fill-available;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 32px 24px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lighterGray};
  border-radius: 8px;
`;

const BtnBox = styled.div`
  max-width: 240px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.purple};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SettingsLayout = () => {
  // context
  const theme = useTheme();
  // state
  const [action, setAction] = React.useState<SettingsAction>();
  // UI
  return (
    <>
      <PageLayout backgroundColor={theme.colors.lighterPurple}>
        <SettingsStyled>
          <div>
            <Heading marginBottom="32px">Configurações</Heading>
            <FeatureCard>
              <Text fontSize="xl" fontWeight="500">
                Limpar dados
              </Text>
              <BtnBox>
                <Button
                  fontSize="md"
                  icon="broom"
                  onClick={() => setAction("clear")}
                >
                  Limpar
                </Button>
              </BtnBox>
            </FeatureCard>
            <FeatureCard>
              <Text fontSize="xl" fontWeight="500">
                Deletar perfil
              </Text>
              <BtnBox>
                <Button
                  fontSize="md"
                  variant="danger"
                  icon="trash"
                  onClick={() => setAction("delete")}
                >
                  Deletar
                </Button>
              </BtnBox>
            </FeatureCard>
          </div>
          <Text textAlign="center" color={theme.colors.purple}>
            © {new Date().getFullYear()} -{" "}
            <FooterLink
              href="https://twitter.com/renan_costa_m"
              target="_blank"
              rel="noreferrer"
            >
              renan
            </FooterLink>{" "}
            &{" "}
            <FooterLink
              href="https://twitter.com/isabcavalcantis"
              target="_blank"
              rel="noreferrer"
            >
              isa
            </FooterLink>
          </Text>
          <SettingsFooter />
        </SettingsStyled>
      </PageLayout>
      {action && (
        <ConfirmationModal
          action={action}
          onClose={() => setAction(undefined)}
        />
      )}
    </>
  );
};
