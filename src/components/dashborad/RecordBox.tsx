import styled, { useTheme } from "styled-components";
import { Text } from "../Text";
import diamond from "../../images/home-diamond.png";

const BoxStyled = styled.div`
  margin-left: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 110px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.colors.lighterGreen};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightGreen};
  border-radius: 10px;
`;

const ImageBox = styled.div`
  position: absolute;
  right: 0;
  width: 80px;
`;

interface RecordBoxProps {
  record: number;
}

export const RecordBox = ({ record }: RecordBoxProps) => {
  const theme = useTheme();
  return (
    <BoxStyled>
      <Text fontSize="md" fontWeight="500" color={theme.colors.gray}>
        Pontos
      </Text>
      <Text fontSize="4xl" fontWeight="500" color={theme.colors.green}>
        {record}
      </Text>
      <ImageBox>
        <img src={diamond} alt="pequeno diamante" width="100%" />
      </ImageBox>
    </BoxStyled>
  );
};
