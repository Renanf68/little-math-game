import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icon";
import { ReactComponent as play } from "../images/play.svg";
import { ReactComponent as check } from "../images/check.svg";
import { FlashButton } from "./FlashButton";

const ActionsFooterStyled = styled.div`
  width: fill-available;
  height: 80px;
  margin: 0 -14px -14px;
  padding: 0 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 4px 0px 10px 6px rgba(234, 234, 234, 0.25);
`;
const BackBtn = styled.button`
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
export const PlayIcon = styled(play)`
  width: 32px;
  height: 32px;
`;
export const CheckIcon = styled(check)`
  width: 32px;
  height: 32px;
`;
const ActionBtn = styled.button`
  margin-top: -40px;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.purple};
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SettingsBtn = styled.button`
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

interface ActionsFooterProps {
  isGame?: boolean;
  backLink: string;
  onAction(): void;
}

export const ActionsFooter = ({
  isGame,
  backLink,
  onAction,
}: ActionsFooterProps) => {
  return (
    <ActionsFooterStyled>
      <Link to={backLink}>
        <BackBtn>
          <Icon as="back" />
        </BackBtn>
      </Link>
      <ActionBtn onClick={onAction}>
        {isGame ? <CheckIcon /> : <PlayIcon />}
      </ActionBtn>
      {isGame ? (
        <FlashButton />
      ) : (
        <SettingsBtn>
          <Icon as="settings" />
        </SettingsBtn>
      )}
    </ActionsFooterStyled>
  );
};
