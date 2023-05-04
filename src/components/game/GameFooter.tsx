import styled from "styled-components";
import { Link } from "react-router-dom";

const GameFooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BackLink = styled(Link)`
  color: ${(props) => props.theme.colors.purple};
  text-decoration: none;
  margin-bottom: 12px;
`;

export const GameFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <GameFooterStyled>
      <BackLink to="/app">Voltar</BackLink>
    </GameFooterStyled>
  );
};
