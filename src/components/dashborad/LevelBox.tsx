import styled, { useTheme } from "styled-components";
import { Text } from "../Text";
import stamp from "../../images/home-stamp.png";

const BoxStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 110px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.colors.lighterYellow};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightYellow};
  border-radius: 10px;
`;

const ImageBox = styled.div`
  position: absolute;
  right: 0;
  width: 80px;
`;

interface LevelBoxProps {
  level: number;
}

export const LevelBox = ({ level }: LevelBoxProps) => {
  const theme = useTheme();
  return (
    <BoxStyled>
      <Text fontSize="md" fontWeight="500">
        Nível
      </Text>
      <Text fontSize="4xl" fontWeight="500" color={theme.colors.yellow}>
        {level}
      </Text>
      <ImageBox>
        <img src={stamp} alt="selo de nível" width="100%" />
      </ImageBox>
    </BoxStyled>
  );
};
