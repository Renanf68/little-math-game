import styled from "styled-components";

const GameHeaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px;
  box-shadow: 4px 0px 10px 6px rgba(234, 234, 234, 0.25);
  border-radius: 10px 10px 0px 0px;
`;

export const GameHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <GameHeaderStyled {...props} />;
};
