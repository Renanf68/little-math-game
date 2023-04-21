import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Question } from "../types";
import React from "react";
import { getQuestion } from "../utils";
import { QuestionCard } from "../components/QuestionCard";
import { FeedbackModal } from "../components/FeedbackModal";
import { GameHeader } from "../components/GameHeader";
import { Text } from "../components/Text";
import { LevelProgress } from "../components/LevelProgress";

interface Match {
  question: Question;
  answered?: boolean;
}

type FeedBack = {
  isCorrect: boolean;
};

export type Matches = {
  match: number;
  isCorrect?: boolean;
};

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
      <PageLayout>
        <div>
          <GameHeader>
            <Text>Nível {user?.level}</Text>
            <Text>Pontos: {score}</Text>
          </GameHeader>
          <LevelProgress matches={matches} currentMatch={matchNumber} />
          {match ? (
            <QuestionCard
              matchNumber={matchNumber}
              question={match.question}
              notifyResponse={handleResponse}
            />
          ) : (
            <p>Carregando...</p>
          )}
          <Link to="/app">
            <Button variant="secondary">Voltar</Button>
          </Link>
        </div>
      </PageLayout>
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
