import styled from "styled-components";
import { Question } from "../types";
import { Button } from "./Button";
import { Input } from "./Input";
import React from "react";

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

interface QuestionCardProps {
  question: Question;
  notifyResponse(isCorrect: boolean): void;
}

export const QuestionCard = ({
  question,
  notifyResponse,
}: QuestionCardProps) => {
  // state
  const [response, setResponse] = React.useState("");
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
  // UI
  return (
    <Card>
      <h2>Q.1</h2>
      <Content>
        <OperationBox>
          <p>{question.operation}</p>
        </OperationBox>
        <div>
          <p>{question.term1}</p>
          <p>{question.term2}</p>
        </div>
      </Content>
      <Input
        type="number"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <Button onClick={reply}>Responder</Button>
    </Card>
  );
};
