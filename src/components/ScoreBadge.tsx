import styled, { useTheme } from "styled-components";
import { Text } from "./Text";
import diamond from "../images/diamond.png";

const BoxesDiamondBox = styled.div`
  width: 12px;
  height: auto;
  margin-right: 8px;
`;

const ScoreBox = styled.div`
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${(props) => props.theme.colors.lighterGreen};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightGreen};
  border-radius: 10px;
`;

interface ScoreBadgeProps {
  score: number;
}

export const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const theme = useTheme();
  return (
    <ScoreBox>
      <BoxesDiamondBox>
        <img src={diamond} alt="pequeno diamante" width="100%" />
      </BoxesDiamondBox>
      <Text fontSize="xs" color={theme.colors.green}>
        {score}
      </Text>
    </ScoreBox>
  );
};
