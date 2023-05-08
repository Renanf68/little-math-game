import styled from "styled-components";
import React from "react";

const GroupWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 48px;
  height: 68px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 1000px;
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  margin-left: 6px;
  :focus {
    outline: none;
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.purple};
  }
  /* appearance: textfield; */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Dot = styled.p`
  margin: 0;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  /* line-height: 0.4rem; */
  /* letter-spacing: 0.0005rem; */
`;

interface QuestionInputProps {
  matchNumber: number;
  inputs: number;
  responsesGroup: string[];
  onResponseChange(inputIndex: number, value: string): void;
  handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
}

export const QuestionInputGroup = ({
  matchNumber,
  inputs,
  responsesGroup,
  onResponseChange,
  handleKeyDown,
}: QuestionInputProps) => {
  // refs
  const inputRef = React.useRef<HTMLInputElement>(null);
  // helpers
  const baseArray = React.useMemo(() => {
    const toAdd = inputs > 3 ? inputs + 1 : inputs;
    return Array.from({ length: toAdd }, () => Math.random());
  }, [inputs]);
  const baseArrayLength = React.useMemo(
    () => baseArray.length,
    [baseArray.length]
  );
  // handlers
  const handleInputValue = (inputIndex: number, value: string) => {
    onResponseChange(inputIndex, value);
    const nextIndex =
      baseArrayLength > 3 && inputIndex === 2 ? 0 : inputIndex - 1;
    const nextInput: HTMLInputElement | null = document.querySelector(
      `input[name=user-input-${nextIndex}]`
    );
    if (nextInput !== null) nextInput.focus();
  };
  React.useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current, matchNumber]);
  // UI
  return (
    <GroupWrapper>
      {baseArray.map((item, index) => {
        if (baseArrayLength > 3 && index === 1) {
          return <Dot key={item}>.</Dot>;
        }
        const isLast = index + 1 === baseArrayLength;
        return (
          <Input
            key={item}
            ref={isLast ? inputRef : null}
            name={`user-input-${index}`}
            type="number"
            // type="text"
            // inputMode="numeric"
            value={responsesGroup[index]}
            onChange={(e) => handleInputValue(index, e.target.value)}
            onKeyDown={handleKeyDown}
          />
        );
      })}
    </GroupWrapper>
  );
};
