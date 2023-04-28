import React from "react";
import { useUserContext } from "../context";
import { FeedBack, Match, Matches } from "../types";
import { getQuestion } from "../utils";
import { QuestionCard } from "../components/QuestionCard";
import { FeedbackModal } from "../components/FeedbackModal";
import { GameLayout } from "../components/game";

const levelMatches = 10;

const levelMinimumScore = 70;

const initialMatches = [
  { match: 1 },
  { match: 2 },
  { match: 3 },
  { match: 4 },
  { match: 5 },
  { match: 6 },
  { match: 7 },
  { match: 8 },
  { match: 9 },
  { match: 10 },
] as Matches[];

// const fakeQ = {
//   term1: 2400,
//   term2: 12,
//   operation: "+",
//   result: 2412,
// } as Question;

const Game = () => {
  // context
  const { user, handleRecord, upgradeLevel } = useUserContext();
  // state
  const [score, setScore] = React.useState(0);
  const [matches, setMatches] = React.useState<Matches[]>(initialMatches);
  const [match, setMatch] = React.useState<Match>();
  const [feedback, setFeedback] = React.useState<FeedBack>();
  const [matchNumber, setMatchNumber] = React.useState(1);
  // helpers
  const shouldUpgradeLevel = React.useMemo(() => {
    if (matchNumber === levelMatches) {
      if (score >= levelMinimumScore) return true;
      return false;
    }
  }, [matchNumber, score]);
  // handlers
  const handleNextMatch = React.useCallback(() => {
    if (matchNumber === levelMatches) {
      if (score >= levelMinimumScore) {
        handleRecord(score);
        upgradeLevel();
      }
      setScore(0);
      setMatchNumber(1);
      setMatches(initialMatches);
    } else {
      setMatchNumber((prev) => prev + 1);
    }
    setFeedback(undefined);
  }, [matchNumber, score, handleRecord, upgradeLevel]);
  const handleResponse = React.useCallback(
    (match: number, isCorrect: boolean) => {
      setMatches((prev) =>
        prev.map((i) => {
          if (i.match === match) return { ...i, isCorrect };
          return i;
        })
      );
      setFeedback({ isCorrect });
      if (isCorrect) {
        setScore((prev) => prev + 10);
      }
      setMatch((prev) => ({ ...prev, answered: true } as Match));
    },
    []
  );
  const handleNewQuestion = React.useCallback(() => {
    const question = getQuestion(user?.level);
    setMatch({
      question,
    });
  }, [user?.level]);
  // // side effects
  React.useEffect(() => {
    if (match && !match.answered) return;
    if (feedback) return;
    handleNewQuestion();
  }, [match, feedback, handleNewQuestion]);
  // UI
  return (
    <>
      <GameLayout
        userLevel={user?.level}
        userScore={score}
        matches={matches}
        currentMatch={matchNumber}
      >
        {match ? (
          <QuestionCard
            matchNumber={matchNumber}
            question={match.question}
            // question={fakeQ}
            notifyResponse={handleResponse}
          />
        ) : (
          <p>Carregando...</p>
        )}
      </GameLayout>
      {feedback && (
        <FeedbackModal
          isCorrect={feedback.isCorrect}
          upgradeLevel={shouldUpgradeLevel}
          onClose={handleNextMatch}
        />
      )}
    </>
  );
};

export default Game;
