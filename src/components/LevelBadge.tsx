import styled, { useTheme } from "styled-components";
import { Text } from "./Text";

const LevelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${(props) => props.theme.colors.lighterYellow};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightYellow};
  border-radius: 10px;
`;

interface LevelBadgeProps {
  level: number;
}

export const LevelBadge = ({ level }: LevelBadgeProps) => {
  const theme = useTheme();
  return (
    <LevelBox>
      <Text fontSize="xs" color={theme.colors.yellow}>
        Nível {level}
      </Text>
    </LevelBox>
  );
};
