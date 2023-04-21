import styled from "styled-components";

interface ProgressBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isFilled: boolean;
}

const ProgressBoxStyled = styled.div<ProgressBoxProps>`
  display: block;
  width: 100%;
  height: 6px;
  margin-right: 4px;
  background-color: ${(props) =>
    props.isFilled ? props.theme.colors.green : props.theme.colors.lighterBlue};
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
  currentQuestion: number;
}

export const LevelProgress = ({
  currentQuestion,
  ...props
}: LevelProgressProps) => {
  return (
    <LevelProgressStyled {...props}>
      <ProgressBoxStyled isFilled={currentQuestion >= 1} />
      <ProgressBoxStyled isFilled={currentQuestion >= 2} />
      <ProgressBoxStyled isFilled={currentQuestion >= 3} />
      <ProgressBoxStyled isFilled={currentQuestion >= 4} />
      <ProgressBoxStyled isFilled={currentQuestion >= 5} />
      <ProgressBoxStyled isFilled={currentQuestion >= 6} />
      <ProgressBoxStyled isFilled={currentQuestion >= 7} />
      <ProgressBoxStyled isFilled={currentQuestion >= 8} />
      <ProgressBoxStyled isFilled={currentQuestion >= 9} />
      <ProgressBoxStyled isFilled={currentQuestion >= 10} />
    </LevelProgressStyled>
  );
};
