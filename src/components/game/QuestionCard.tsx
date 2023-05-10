import styled from "styled-components";
import { Question } from "../../types";
import React from "react";
import { Text } from "../Text";
import { NumberKeyboard } from "./NumberKeyboard";
import { ResponseDisplay } from "./ResponseDisplay";

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;
const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OperationBoard = styled.div`
  width: fill-available;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const TermsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 300px;
  border-bottom: 6px solid;
  border-color: ${(props) => props.theme.colors.gray};
`;
const OperationBox = styled.div`
  padding: 0 14px;
  display: flex;
  align-items: flex-end;
`;
const Term = styled.p`
  margin: 0;
  text-align: end;
  font-size: ${(props) => props.theme.fontSize["6xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  /* line-height: 0.4rem; */
  letter-spacing: 0.8rem;
`;
const Operation = styled.p`
  margin: 0;
  text-align: end;
  font-size: ${(props) => props.theme.fontSize["6xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  /* line-height: 0.4rem; */
  letter-spacing: 0.8rem;
`;

const InputWrapper = styled.div`
  display: flex;
  width: fill-available;
  max-width: 300px;
`;

interface QuestionCardProps {
  matchNumber: number;
  question: Question;
  // response: string;
  // isGroup: boolean;
  // handleInputGroup(isGroup: boolean): void;
  notifyResponse(response: string): void;
  reply(): void;
}

export const QuestionCard = ({
  matchNumber,
  question,
  notifyResponse,
}: // reply,
QuestionCardProps) => {
  // state
  const [responsesGroup, setResponsesGroup] = React.useState<string[]>([]);
  const [responseToRight, setResponseToRight] = React.useState(true);
  // helpers
  const resultLength = React.useMemo(
    () => question.result.toString().length,
    [question.result]
  );
  // handlers
  const initializeResponsesGroup = React.useCallback(() => {
    setResponsesGroup([]);
  }, []);
  const handleResponsesGroup = React.useCallback(
    (value: string) => {
      if (responsesGroup.length === resultLength) return;
      setResponsesGroup((prev) => {
        if (responseToRight) {
          const newGroup = [...prev];
          newGroup.push(value);
          return newGroup;
        }
        const newGroup = [...prev];
        newGroup.unshift(value);
        return newGroup;
      });
    },
    [responseToRight, resultLength, responsesGroup]
  );
  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter" && !event.shiftKey) {
  //     event.preventDefault();
  //     reply();
  //   }
  // };
  React.useEffect(() => {
    initializeResponsesGroup();
  }, [initializeResponsesGroup, matchNumber]);
  React.useEffect(() => {
    const concat = responsesGroup.join("");
    notifyResponse(concat);
  }, [responsesGroup, notifyResponse]);
  // UI
  return (
    <Card>
      <CardHeader>
        <Text fontSize="3xl" fontWeight="500">
          Pergunta {matchNumber}
        </Text>
      </CardHeader>
      <OperationBoard>
        <Content>
          <TermsBox>
            <OperationBox>
              <Operation>{question.operation}</Operation>
            </OperationBox>
            <div>
              <Term>{question.term1.toLocaleString()}</Term>
              <Term>{question.term2.toLocaleString()}</Term>
            </div>
          </TermsBox>
          <InputWrapper>
            <ResponseDisplay
              responseToRight={responseToRight}
              resultLenght={resultLength}
              responsesGroup={responsesGroup}
            />
          </InputWrapper>
        </Content>
        <NumberKeyboard
          responseToRight={responseToRight}
          onDirectionChange={setResponseToRight}
          handleKeyPress={handleResponsesGroup}
          onBackspace={() => {}}
        />
      </OperationBoard>
    </Card>
  );
};
