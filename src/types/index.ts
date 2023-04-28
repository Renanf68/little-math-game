export interface User {
  name?: string;
  record?: number;
  level?: number;
}

export type Operation = "+" | "-" | "x" | ":";

export type Question = {
  term1: number;
  term2: number;
  operation: Operation;
  result: number;
};

export type Terms = {
  term1: number;
  term2: number;
};

export interface Match {
  question: Question;
  answered?: boolean;
}

export type FeedBack = {
  isCorrect: boolean;
};

export type Matches = {
  match: number;
  isCorrect?: boolean;
};
