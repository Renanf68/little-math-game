import React from "react";
import { useUserContext } from "../context";
import { FeedBack, Match, Matches } from "../types";
import { getQuestion } from "../utils";
import { QuestionCard } from "../components/game/QuestionCard";
import { FeedbackModal } from "../components/FeedbackModal";
import { GameLayout } from "../components/game";
import { BigFlash } from "../components/game/BigFlash";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    user,
    notifyFlash,
    flashFired,
    handlePower,
    setFlashNotified,
    handleRecord,
    upgradeLevel,
  } = useUserContext();
  // state
  const [score, setScore] = React.useState(0);
  const [matches, setMatches] = React.useState<Matches[]>(initialMatches);
  const [match, setMatch] = React.useState<Match>();
  const [feedback, setFeedback] = React.useState<FeedBack>();
  const [matchNumber, setMatchNumber] = React.useState(1);
  const [showBigFlash, setShowBigFlash] = React.useState(false);
  // state
  const [response, setResponse] = React.useState("");
  // helpers
  const shouldUpgradeLevel = React.useMemo(() => {
    if (matchNumber === levelMatches) {
      if (score >= levelMinimumScore) return true;
      return false;
    }
  }, [matchNumber, score]);
  // handlers
  const handleFlashNotification = React.useCallback(() => {
    if (!notifyFlash) return;
    setFlashNotified(true);
  }, [notifyFlash, setFlashNotified]);
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
    handleFlashNotification();
  }, [matchNumber, score, handleRecord, upgradeLevel, handleFlashNotification]);
  const handleResponse = React.useCallback(() => {
    const responseInt = parseInt(response);
    let isCorrect = false;
    if (responseInt === match?.question.result) {
      isCorrect = true;
    }
    setResponse("");
    setMatches((prev) =>
      prev.map((i) => {
        if (i.match === matchNumber) return { ...i, isCorrect };
        return i;
      })
    );
    setFeedback({ isCorrect });
    if (isCorrect) {
      setScore((prev) => prev + 10);
      handlePower(10);
    }
    setMatch((prev) => ({ ...prev, answered: true } as Match));
  }, [handlePower, response, match?.question.result, matchNumber]);
  const handleNewQuestion = React.useCallback(() => {
    const question = getQuestion(user?.level);
    setMatch({
      question,
    });
  }, [user?.level]);
  const handleBigFlash = React.useCallback(() => {
    setShowBigFlash(true);
    setTimeout(() => setShowBigFlash(false), 300);
  }, []);
  // // side effects
  React.useEffect(() => {
    if (match && !match.answered) return;
    if (feedback) return;
    handleNewQuestion();
  }, [match, feedback, handleNewQuestion]);
  React.useEffect(() => {
    if (!flashFired) return;
    handleBigFlash();
  }, [flashFired, handleBigFlash]);
  React.useEffect(() => {
    if (user) return;
    navigate("/app");
  }, [user, navigate]);
  // UI
  return (
    <>
      <GameLayout
        userLevel={user?.level ?? 1}
        userScore={score}
        matches={matches}
        currentMatch={matchNumber}
        onAction={handleResponse}
      >
        {match ? (
          <QuestionCard
            matchNumber={matchNumber}
            question={match.question}
            notifyResponse={setResponse}
            reply={handleResponse}
          />
        ) : (
          <p>Carregando...</p>
        )}
        {showBigFlash && <BigFlash />}
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
