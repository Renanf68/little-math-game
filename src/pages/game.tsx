import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Question } from "../types";
import React from "react";
import { getQuestion } from "../utils";
import { QuestionCard } from "../components/QuestionCard";
import { FeedbackModal } from "../components/FeedbackModal";

interface Match {
  question: Question;
  answered?: boolean;
}

type FeedBack = {
  isCorrect: boolean;
};

const Game = () => {
  // context
  const { user, handleRecord, upgradeLevel } = useUserContext();
  // state
  const [points, setPoints] = React.useState(0);
  const [match, setMatch] = React.useState<Match>();
  const [feedback, setFeedback] = React.useState<FeedBack>();
  const [matchNumber, setMatchNumber] = React.useState(1);
  // handlers
  const handleNextMatch = React.useCallback(() => {
    if (matchNumber === 3) {
      upgradeLevel();
      setMatchNumber(1);
    } else {
      setMatchNumber((prev) => prev + 1);
    }
  }, [matchNumber, upgradeLevel]);
  const handleResponse = React.useCallback(
    (isCorrect: boolean) => {
      setFeedback({ isCorrect });
      if (isCorrect) {
        setPoints((prev) => prev + 10);
      }
      setMatch((prev) => ({ ...prev, answered: true } as Match));
      handleNextMatch();
    },
    [handleNextMatch]
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
    handleNewQuestion();
  }, [match, handleNewQuestion]);
  React.useEffect(() => {
    if (!points) return;
    handleRecord(points);
  }, [points, handleRecord]);
  // UI
  return (
    <>
      <PageLayout>
        <div>
          <h1>Nível {user?.level}</h1>
          <h2>Pontos: {points}</h2>
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
            <Button>Voltar</Button>
          </Link>
        </div>
      </PageLayout>
      {feedback && (
        <FeedbackModal
          isCorrect={feedback.isCorrect}
          onClose={() => setFeedback(undefined)}
        />
      )}
    </>
  );
};

export default Game;
