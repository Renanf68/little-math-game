import styled from "styled-components";
import { Matches } from "../pages/game";

interface ProgressBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isCorrect?: boolean;
  isCurrent?: boolean;
}

const ProgressBoxStyled = styled.div<ProgressBoxProps>`
  display: block;
  width: 100%;
  height: 6px;
  margin-right: 4px;
  background-color: ${(props) =>
    props.isCorrect
      ? props.theme.colors.green
      : props.isCorrect === false
      ? props.theme.colors.red
      : props.isCurrent
      ? props.theme.colors.blue
      : props.theme.colors.lighterBlue};
  border-radius: 4px;
`;

const LevelProgressStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & ${ProgressBoxStyled}:nth-child(10) {
    margin-right: 0;
  }
`;

interface LevelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  matches: Matches[];
  currentMatch: number;
}

export const LevelProgress = ({
  matches,
  currentMatch,
  ...props
}: LevelProgressProps) => {
  return (
    <LevelProgressStyled {...props}>
      {matches.map((match) => (
        <ProgressBoxStyled
          key={match.match}
          isCorrect={match.isCorrect}
          isCurrent={currentMatch === match.match}
        />
      ))}
      {/* <ProgressBoxStyled isCorrect={currentQuestion >= 2} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 3} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 4} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 5} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 6} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 7} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 8} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 9} />
      <ProgressBoxStyled isCorrect={currentQuestion >= 10} /> */}
    </LevelProgressStyled>
  );
};
