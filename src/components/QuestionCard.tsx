import styled from "styled-components";
import { Question } from "../types";
import { Button } from "./Button";
// import { Input } from "./Input";
import React from "react";
import { Heading } from "./Heading";
import { QuestionInputGroup } from "./QuestionInputGroup";
import { Input } from "./Input";

const Card = styled.div`
  width: 100%;
`;
const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SwitchBtn = styled.button`
  margin-top: 16px;
  width: 26px;
  height: 26px;
`;
const OperationBoard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 100%; */
  border-bottom: 6px solid black;
`;

const OperationBox = styled.div`
  padding: 0 14px;
  display: flex;
  align-items: flex-end;
`;

const Term = styled.p`
  margin: 0;
  text-align: end;
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  /* line-height: 0.4rem; */
  letter-spacing: 0.8rem;
`;
const Operation = styled.p`
  margin: 0;
  text-align: end;
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  /* line-height: 0.4rem; */
  letter-spacing: 0.8rem;
`;

interface QuestionCardProps {
  matchNumber: number;
  question: Question;
  notifyResponse(match: number, isCorrect: boolean): void;
}

export const QuestionCard = ({
  matchNumber,
  question,
  notifyResponse,
}: QuestionCardProps) => {
  // state
  const [response, setResponse] = React.useState("");
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
  const reply = () => {
    console.group("response: ", response);
    const responseInt = parseInt(response);
    let isCorrect = false;
    if (responseInt === question.result) {
      isCorrect = true;
    }
    setResponse("");
    notifyResponse(matchNumber, isCorrect);
  };
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
    setResponse(concat);
  }, [responsesGroup]);
  // UI
  return (
    <Card>
      <CardHeader>
        <Heading>Pergunta {matchNumber}:</Heading>
        <SwitchBtn onClick={() => setIsGroup((prev) => !prev)}>s</SwitchBtn>
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
              onChange={(e) => setResponse(e.target.value)}
              onKeyDown={handleKeyDown}
              game
            />
          )}
        </div>
      </OperationBoard>
      <Button onClick={reply} disabled={response.length === 0}>
        Responder
      </Button>
    </Card>
  );
};
