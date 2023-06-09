import { Operation, Question, Terms } from "../types";

const getTens = () => Math.floor(Math.random() * 10) * 10;

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const operationOptions = ["+", "-", "x", ":"] as Operation[];

const getOperation = (level: number): Operation => {
  // levels 1, 2, 3, 4 and 5 => only +
  if (level <= 5) return "+";
  // levels 6, 7, 8, 9 and 10 => + or -
  let max = 1;
  // levels 11, 12, 13, 14 and 15 => +, - or x
  if (level > 10 && level <= 15) max = 2;
  // levels above 15 => +, -, x or :
  if (level > 15) max = 3;
  const randomIndex = randomIntFromInterval(0, max);
  return operationOptions[randomIndex];
};

const bigNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const getBigNumber = () => {
  const randomIndex = randomIntFromInterval(0, 9);
  return bigNumbers[randomIndex];
};

const getIntroTerms = (level: number, operation: Operation): Terms => {
  let term1;
  let term2;
  if (level === 1) {
    term1 = randomIntFromInterval(0, 9);
    term2 = randomIntFromInterval(0, 6);
  } else if (level === 2) {
    term1 = randomIntFromInterval(0, 12);
    term2 = randomIntFromInterval(0, 8);
  } else if (level === 3) {
    term1 = randomIntFromInterval(10, 20);
    term2 = randomIntFromInterval(0, 10);
  } else if (level === 4 || level === 5) {
    term1 = randomIntFromInterval(0, 20);
    term2 = randomIntFromInterval(0, 10);
    // term1 = getTens();
    // term2 = randomIntFromInterval(0, 10);
  } else {
    if (operation === "+") {
      term1 = getBigNumber();
      term2 = getTens();
    } else {
      term1 = getTens();
      term2 = getTens();
    }
  }
  return { term1, term2 };
};

const divisions = [
  { term1: 3, term2: 1 },
  { term1: 3, term2: 3 },
  { term1: 4, term2: 2 },
  { term1: 6, term2: 2 },
  { term1: 6, term2: 3 },
  { term1: 6, term2: 6 },
  { term1: 8, term2: 4 },
  { term1: 10, term2: 2 },
  { term1: 10, term2: 5 },
  { term1: 12, term2: 3 },
  { term1: 12, term2: 4 },
  { term1: 12, term2: 6 },
  { term1: 20, term2: 2 },
  { term1: 20, term2: 10 },
] as Terms[];

const getDivision = (): Terms => {
  const randomIndex = randomIntFromInterval(0, 13);
  return divisions[randomIndex];
};

const getMediumTerms = (level: number, operation: Operation) => {
  let term1;
  let term2;
  if (operation === "+" || operation === "-") {
    const terms = getIntroTerms(level, operation);
    term1 = terms.term1;
    term2 = terms.term2;
  } else if (operation === "x") {
    if (level < 20) {
      term1 = randomIntFromInterval(0, 8);
      term2 = randomIntFromInterval(0, 4);
    } else {
      term1 = randomIntFromInterval(0, 10);
      term2 = randomIntFromInterval(0, 10);
    }
  } else {
    const terms = getDivision();
    term1 = terms.term1;
    term2 = terms.term2;
  }
  return { term1, term2 };
};

const getResult = (term1: number, term2: number, operation: Operation) => {
  if (operation === "+") {
    return term1 + term2;
  } else if (operation === "-") {
    return term1 - term2;
  } else if (operation === "x") {
    return term1 * term2;
  }
  return term1 / term2;
};

export const getQuestion = (level: number = 1): Question => {
  let term1;
  let term2;
  let operation = getOperation(level);
  if (level <= 5) {
    const terms = getIntroTerms(level, operation);
    term1 = terms.term1;
    term2 = terms.term2;
  } else {
    const terms = getMediumTerms(level, operation);
    term1 = terms.term1;
    term2 = terms.term2;
  }
  if (term1 < term2 && operation === "-") {
    operation = "+";
  }
  const result = getResult(term1, term2, operation);
  return {
    term1,
    term2,
    operation,
    result,
  };
};
