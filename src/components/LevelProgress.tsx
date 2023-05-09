import styled from "styled-components";
import { Matches } from "../types";

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
      ? props.theme.colors.pink
      : props.isCurrent
      ? props.theme.colors.purple
      : props.theme.colors.lighterPurple};
  border-radius: 4px;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: ${(props) =>
    props.isCurrent && props.isCorrect !== undefined
      ? "0.3s linear pulse"
      : ""};
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
    </LevelProgressStyled>
  );
};
