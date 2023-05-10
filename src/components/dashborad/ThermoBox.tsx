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
  userLevel: number;
}

const DifficultyFill = styled.div<DifficultyFillProps>`
  position: absolute;
  top: 0;
  width: ${(props) => `${props.userLevel > 20 ? 100 : props.userLevel * 5}%`};
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

const ThermoIconBox = styled.div`
  position: absolute;
  top: -7px;
  right: -15px;
  width: 30px;
`;

interface ThermoBoxProps {
  userLevel: number;
}

export const ThermoBox = ({ userLevel }: ThermoBoxProps) => {
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
          <DifficultyFill userLevel={userLevel}>
            <ThermoIconBox>
              <img
                src={thermoIcon}
                alt="termômetro de dificuldade"
                width="100%"
              />
            </ThermoIconBox>
          </DifficultyFill>
        </PowerWrapper>
      </Content>
      <ImageBox>
        <img src={thermo} alt="termômetro de dificuldade" width="100%" />
      </ImageBox>
    </BoxStyled>
  );
};
