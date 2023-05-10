import styled from "styled-components";
import React from "react";

const GroupWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Dash = styled.div`
  width: 36px;
  height: 64px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.lighterGray};
  margin-right: 9px;
`;

const ResponseNumber = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["6xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

const Dot = styled.p`
  margin: 0 9px 0 0;
  font-size: ${(props) => props.theme.fontSize["6xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

interface ResponseDisplayProps {
  responseToRight: boolean;
  resultLenght: number;
  responsesGroup: string[];
}

const getReverselength = (resultLenght: number, dashIndex: number) => {
  const lastIndex = resultLenght - 1;
  return lastIndex - dashIndex;
};

export const ResponseDisplay = ({
  responseToRight,
  resultLenght,
  responsesGroup,
}: ResponseDisplayProps) => {
  // state
  const [groupToDisplay, setGroupToDisplay] = React.useState<string[]>([]);
  // helpers
  const baseArray = React.useMemo(() => {
    return Array.from({ length: resultLenght }, () => Math.random());
  }, [resultLenght]);
  React.useEffect(() => {
    if (responseToRight) {
      setGroupToDisplay(responsesGroup);
    } else {
      const newGroup = [...responsesGroup].reverse();
      setGroupToDisplay(newGroup);
    }
  }, [responsesGroup, responseToRight]);
  // UI
  return (
    <GroupWrapper>
      {baseArray.map((item, index) => {
        const reverseIndex = getReverselength(resultLenght, index);
        const itemIndex = responseToRight ? index : reverseIndex;
        const showDot = resultLenght > 3 && index === 0;
        return (
          <>
            <Dash key={item}>
              <ResponseNumber>{groupToDisplay[itemIndex]}</ResponseNumber>
            </Dash>
            {showDot && <Dot>.</Dot>}
          </>
        );
      })}
    </GroupWrapper>
  );
};
