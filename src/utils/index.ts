import { Operation, Question } from "../types";

const getTens = () => Math.floor(Math.random() * 10) * 10;

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getResult = (term1: number, term2: number, operation: Operation) => {
  if (operation === "+") {
    return term1 + term2;
  } else if (operation === "-") {
    return term1 - term2;
  } else if (operation === "*") {
    return term1 * term2;
  }
  return term1 / term2;
};

export const getQuestion = (level: number = 1): Question => {
  const min = 0;
  const max = 10;
  const operation = "+";
  const term1 = randomIntFromInterval(min, max);
  let term2 = randomIntFromInterval(min, max);
  if (level > 1) {
    term2 = getTens();
  }
  const result = getResult(term1, term2, operation);
  return {
    term1,
    term2,
    operation,
    result,
  };
};
