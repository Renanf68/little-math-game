import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../Icon";

const SettingsFooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 82px;
  padding: 0 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 4px 0px 10px 6px rgba(234, 234, 234, 0.25);
  z-index: 10;
  @media (min-width: 400px) {
    position: absolute;
    max-width: 390px;
  }
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

export const SettingsFooter = () => {
  return (
    <SettingsFooterStyled>
      <Link to="/app">
        <BackBtn>
          <Icon as="back" />
        </BackBtn>
      </Link>
    </SettingsFooterStyled>
  );
};
