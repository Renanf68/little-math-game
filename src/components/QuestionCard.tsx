import styled from "styled-components";
import { Question } from "../types";
import { Button } from "./Button";
import { Input } from "./Input";
import React from "react";
import { Heading } from "./Heading";

const Card = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.lg};
`;
const OperationBox = styled.div`
  padding: 0 14px;
  display: flex;
  align-items: flex-end;
`;

const Term = styled.p`
  text-align: end;
  font-size: 54px;
  line-height: 4px;
  letter-spacing: 4px;
`;
const Operation = styled.p`
  text-align: end;
  font-size: 54px;
  line-height: 4px;
  letter-spacing: 4px;
`;

interface QuestionCardProps {
  matchNumber: number;
  question: Question;
  notifyResponse(isCorrect: boolean): void;
}

export const QuestionCard = ({
  matchNumber,
  question,
  notifyResponse,
}: QuestionCardProps) => {
  // state
  const [response, setResponse] = React.useState("");
  // refs
  const inputRef = React.useRef<HTMLInputElement>(null);
  // handlers
  const reply = () => {
    const responseInt = parseInt(response);
    let isCorrect = false;
    if (responseInt === question.result) {
      isCorrect = true;
    }
    setResponse("");
    notifyResponse(isCorrect);
  };
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  // UI
  return (
    <Card>
      <Heading>Pergunta {matchNumber}:</Heading>
      <Content>
        <OperationBox>
          <Operation>{question.operation}</Operation>
        </OperationBox>
        <div>
          <Term>{question.term1}</Term>
          <Term>{question.term2}</Term>
        </div>
      </Content>
      <Input
        ref={inputRef}
        type="number"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <Button onClick={reply}>Responder</Button>
    </Card>
  );
};
