import styled from "styled-components";
import { Text } from "../Text";
import thermo from "../../images/thermo-illustration.png";
import thermoIcon from "../../images/thermo-icon.png";

const BoxStyled = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: fill-available;
  height: 110px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.colors.lighterPink};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightPink};
  border-radius: 10px;
`;

const Content = styled.div`
  max-width: 240px;
`;

const PowerWrapper = styled.div`
  margin-top: 24px;
  position: relative;
  width: fill-available;
  height: 30px;
`;
const PowerBar = styled.div`
  width: fill-available;
  height: 16px;
  background-color: white;
  border-radius: 8px;
`;

interface DifficultyFillProps {
  difficulty: number;
}

const DifficultyFill = styled.div<DifficultyFillProps>`
  position: absolute;
  top: 0;
  width: ${(props) =>
    `${props.difficulty > 10 ? 100 : props.difficulty * 10}%`};
  min-width: 15px;
  height: 16px;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: 8px 0 0 8px;
`;

const ImageBox = styled.div`
  position: absolute;
  top: 16px;
  right: 14px;
  width: 42px;
`;

const FlashIconBox = styled.div`
  position: absolute;
  top: -7px;
  right: -15px;
  width: 30px;
`;

interface ThermoBoxProps {
  difficulty: number;
}

export const ThermoBox = ({ difficulty }: ThermoBoxProps) => {
  return (
    <BoxStyled>
      <Content>
        <Text fontSize="md" fontWeight="500">
          Nível de dificuldade
        </Text>
        <Text marginTop="6px" fontSize="xs">
          A medida que você avança nos diferentes níveis, as perguntas ficam
          mais difícies
        </Text>
        <PowerWrapper>
          <PowerBar />
          <DifficultyFill difficulty={difficulty}>
            <FlashIconBox>
              <img
                src={thermoIcon}
                alt="termômetro de dificuldade"
                width="100%"
              />
            </FlashIconBox>
          </DifficultyFill>
        </PowerWrapper>
      </Content>
      <ImageBox>
        <img src={thermo} alt="termômetro de dificuldade" width="100%" />
      </ImageBox>
    </BoxStyled>
  );
};
