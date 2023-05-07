import styled from "styled-components";
import { Text } from "../Text";
import flash from "../../images/flash-illustration.png";
import flashIcon from "../../images/full-flash.png";

const BoxStyled = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: fill-available;
  height: 110px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.colors.lighterPurple};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightPurple};
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

interface PowerFillProps {
  power: number;
}

const PowerFill = styled.div<PowerFillProps>`
  position: absolute;
  top: 0;
  width: ${(props) => `${props.power}%`};
  min-width: 15px;
  height: 16px;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 8px 0 0 8px;
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  right: 14px;
  width: 68px;
`;

const FlashIconBox = styled.div`
  position: absolute;
  top: -7px;
  right: -15px;
  width: 30px;
`;

interface FlashBoxProps {
  power: number;
}

export const FlashBox = ({ power }: FlashBoxProps) => {
  return (
    <BoxStyled>
      <Content>
        <Text fontSize="md" fontWeight="500">
          Poder especial
        </Text>
        <Text marginTop="6px" fontSize="xs">
          Disparando o raio você revela a resposta da pergunta
        </Text>
        <PowerWrapper>
          <PowerBar />
          <PowerFill power={power}>
            <FlashIconBox>
              <img src={flashIcon} alt="raio de poder especial" width="100%" />
            </FlashIconBox>
          </PowerFill>
        </PowerWrapper>
      </Content>
      <ImageBox>
        <img src={flash} alt="raio de poder especial" width="100%" />
      </ImageBox>
    </BoxStyled>
  );
};
