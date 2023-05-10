import styled from "styled-components";
import { ReactComponent as backspace } from "../../images/backspace.svg";
import { ReactComponent as arrowRight } from "../../images/arrow-right.svg";
import { ReactComponent as arrowLeft } from "../../images/arrow-left.svg";

const KeyboardContainer = styled.div`
  margin-top: 24px;
  width: fill-available;
`;

const KeyboardFlex = styled.div`
  display: flex;
`;

const KeyCard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lighterGray};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.lighterPurple};
  }
`;

const ArrowsCard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lighterGray};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.lighterPurple};
  }
`;

const KeyNumber = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  color: ${(props) => props.theme.colors.gray};
`;

const Backspace = styled(backspace)`
  width: 24px;
  height: 24px;
`;

interface ArrowProps {
  isRight?: boolean;
  icon: "right" | "left";
}

const ArrowWrapper = styled.div<ArrowProps>`
  width: 24px;
  height: 24px;
  opacity: ${(props) =>
    props.icon === "right"
      ? props.isRight
        ? "1"
        : "0.4"
      : props.isRight
      ? "0.4"
      : "1"};
`;

const ArrowRight = styled(arrowRight)`
  width: 24px;
  height: 24px;
  margin-bottom: -12px;
`;

const ArrowLeft = styled(arrowLeft)`
  width: 24px;
  height: 24px;
  margin-top: -4px;
`;

const firstLine = ["0", "1", "2", "3", "4"];
const secondLine = ["5", "6", "7", "8", "9"];

interface NumberKeyboardProps {
  responseToRight: boolean;
  onDirectionChange(responseToRight: boolean): void;
  handleKeyPress(value: string): void;
  onBackspace(): void;
}

export const NumberKeyboard = ({
  responseToRight,
  onDirectionChange,
  handleKeyPress,
  onBackspace,
}: NumberKeyboardProps) => {
  return (
    <KeyboardContainer>
      <KeyboardFlex>
        {firstLine.map((number) => (
          <KeyCard key={number} onClick={() => handleKeyPress(number)}>
            <KeyNumber>{number}</KeyNumber>
          </KeyCard>
        ))}
        <ArrowsCard onClick={() => onDirectionChange(!responseToRight)}>
          <ArrowWrapper icon="right" isRight={responseToRight}>
            <ArrowRight />
          </ArrowWrapper>
          <ArrowWrapper icon="left" isRight={responseToRight}>
            <ArrowLeft />
          </ArrowWrapper>
        </ArrowsCard>
      </KeyboardFlex>
      <KeyboardFlex>
        {secondLine.map((number) => (
          <KeyCard key={number} onClick={() => handleKeyPress(number)}>
            <KeyNumber>{number}</KeyNumber>
          </KeyCard>
        ))}
        <KeyCard>
          <Backspace />
        </KeyCard>
      </KeyboardFlex>
    </KeyboardContainer>
  );
};
