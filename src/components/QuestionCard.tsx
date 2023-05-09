import styled from "styled-components";
import { Question } from "../types";
import React from "react";
import { QuestionInputGroup } from "./QuestionInputGroup";
import { Input } from "./Input";
import { SwitchLayoutButton } from "./SwitchLayoutButton";
import { Text } from "./Text";

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
`;
const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OperationBoard = styled.div`
  padding-top: 24px;
  width: fill-available;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-end;
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
  font-size: ${(props) => props.theme.fontSize["7xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  /* line-height: 0.4rem; */
  letter-spacing: 0.8rem;
`;
const Operation = styled.p`
  margin: 0;
  text-align: end;
  font-size: ${(props) => props.theme.fontSize["7xl"]};
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
  response: string;
  notifyResponse(response: string): void;
  reply(): void;
}

export const QuestionCard = ({
  matchNumber,
  question,
  response,
  notifyResponse,
  reply,
}: QuestionCardProps) => {
  // state
  const [responsesGroup, setResponsesGroup] = React.useState<string[]>([]);
  const [isGroup, setIsGroup] = React.useState(false);
  // refs
  const fullInputRef = React.useRef<HTMLInputElement>(null);
  // helpers
  const resultLength = React.useMemo(
    () => question.result.toString().length,
    [question.result]
  );
  // handlers
  const initializeResponsesGroup = React.useCallback(() => {
    const array = Array(resultLength).fill("");
    setResponsesGroup(array);
  }, [resultLength]);
  const handleResponsesGroup = React.useCallback(
    (inputIndex: number, value: string) => {
      setResponsesGroup((prev) => {
        const newResp = prev.map((r, i) => {
          if (i === inputIndex) return value;
          return r;
        });
        return newResp;
      });
    },
    []
  );
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      reply();
    }
  };
  React.useEffect(() => {
    initializeResponsesGroup();
  }, [initializeResponsesGroup, matchNumber]);
  React.useEffect(() => {
    const concat = responsesGroup.join("");
    notifyResponse(concat);
  }, [responsesGroup, notifyResponse]);
  React.useEffect(() => {
    if (isGroup) return;
    fullInputRef.current?.focus();
  }, [matchNumber, isGroup]);
  // UI
  return (
    <Card>
      <CardHeader>
        <Text fontSize="3xl" fontWeight="500">
          Pergunta {matchNumber}
        </Text>
      </CardHeader>
      <OperationBoard>
        <div>
          <Content>
            <OperationBox>
              <Operation>{question.operation}</Operation>
            </OperationBox>
            <div>
              <Term>{question.term1.toLocaleString()}</Term>
              <Term>{question.term2.toLocaleString()}</Term>
            </div>
          </Content>
          <InputWrapper>
            <SwitchLayoutButton
              isGroup={isGroup}
              onClick={() => setIsGroup((prev) => !prev)}
            />
            {isGroup ? (
              <QuestionInputGroup
                matchNumber={matchNumber}
                inputs={resultLength}
                responsesGroup={responsesGroup}
                onResponseChange={handleResponsesGroup}
                handleKeyDown={handleKeyDown}
              />
            ) : (
              <Input
                ref={fullInputRef}
                type="number"
                value={response}
                onChange={(e) => notifyResponse(e.target.value)}
                onKeyDown={handleKeyDown}
                game
              />
            )}
          </InputWrapper>
        </div>
      </OperationBoard>
    </Card>
  );
};
