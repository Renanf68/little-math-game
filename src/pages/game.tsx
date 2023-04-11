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
  const { user, handleRecord } = useUserContext();
  // state
  const [match, setMatch] = React.useState<Match>();
  const [feedback, setFeedback] = React.useState<FeedBack>();
  // handlers
  const handleResponse = React.useCallback(
    (isCorrect: boolean) => {
      setFeedback({ isCorrect });
      if (isCorrect) {
        handleRecord(10);
      }
      setMatch((prev) => ({ ...prev, answered: true } as Match));
    },
    [handleRecord]
  );
  // side effects
  React.useEffect(() => {
    if (match && !match.answered) return;
    const question = getQuestion(user?.level);
    setMatch({
      question,
    });
  }, [match, user?.level]);
  // UI
  return (
    <>
      <PageLayout>
        <div>
          <h1>Nível {user?.level ?? 1}</h1>
          <h2>Pontos: {user?.record}</h2>
          {match ? (
            <QuestionCard
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
