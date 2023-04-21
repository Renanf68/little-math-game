import styled from "styled-components";

const GameHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GameHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <GameHeaderStyled {...props} />;
};
