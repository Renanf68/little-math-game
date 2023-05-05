import styled from "styled-components";
import number4 from "../../images/number4.png";
import number5 from "../../images/number5.png";
import number6 from "../../images/number6.png";
import number7 from "../../images/number7.png";
import number8 from "../../images/number8.png";
import number9 from "../../images/number9.png";
import number10 from "../../images/number10.png";
import { Text } from "../Text";

const Flex = styled.div`
  margin-top: 16px;
  padding: 16px 0 16px 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  width: fill-available;
  min-height: 112px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const AgeSelectStyled = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`;

const AgeList = styled.div`
  margin-top: 8px;
  display: flex;
  width: fit-content;
  padding: 12px 0;
`;

interface AgeBoxProps {
  selected?: boolean;
}

const AgeBox = styled.div<AgeBoxProps>`
  width: 78px;
  height: 78px;
  border: ${(props) => (props.selected ? "2px solid" : "none")};
  border-color: ${(props) =>
    props.selected ? props.theme.colors.purple : undefined};
  border-radius: 40px;
  margin-right: 8px;
  margin-bottom: 4px;
  cursor: pointer;
`;

interface AgeSelectProps {
  selected?: number;
  onSelect(selected: number): void;
}

export const AgeSelect = ({ selected, onSelect }: AgeSelectProps) => {
  return (
    <Flex>
      <Text fontSize="xl" fontWeight="500">
        Qual a sua idade?
      </Text>
      <AgeSelectStyled>
        <AgeList>
          <AgeBox selected={selected === 4} onClick={() => onSelect(4)}>
            <img src={number4} alt="número 4" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 5} onClick={() => onSelect(5)}>
            <img src={number5} alt="número 5" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 6} onClick={() => onSelect(6)}>
            <img src={number6} alt="número 6" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 7} onClick={() => onSelect(7)}>
            <img src={number7} alt="número 7" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 8} onClick={() => onSelect(8)}>
            <img src={number8} alt="número 8" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 9} onClick={() => onSelect(9)}>
            <img src={number9} alt="número 9" width="100%" />
          </AgeBox>
          <AgeBox selected={selected === 10} onClick={() => onSelect(10)}>
            <img src={number10} alt="número 10" width="100%" />
          </AgeBox>
        </AgeList>
      </AgeSelectStyled>
    </Flex>
  );
};
