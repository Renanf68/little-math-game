import React from "react";
import { GameHeader } from "./GameHeader";
import { LevelProgress } from "../LevelProgress";
import { PageLayout } from "../PageLayout";
import styled from "styled-components";
import { Matches } from "../../types";
import { ActionsFooter } from "../ActionsFooter";
import { LevelBadge } from "../LevelBadge";
import { ScoreBadge } from "../ScoreBadge";
import { ThermoBar } from "./ThermoBar";

const GameLayoutStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 96px;
`;

interface GameLayoutProps {
  userLevel: number;
  userScore: number;
  matches: Matches[];
  currentMatch: number;
  onAction(): void;
  children: React.ReactNode;
}

export const GameLayout = ({
  userLevel,
  userScore,
  matches,
  currentMatch,
  onAction,
  children,
}: GameLayoutProps) => {
  return (
    <PageLayout>
      <GameLayoutStyled id="game-layout">
        <div>
          <GameHeader>
            <LevelBadge level={userLevel} />
            <ScoreBadge score={userScore} />
            <ThermoBar userLevel={userLevel} />
          </GameHeader>
          <LevelProgress matches={matches} currentMatch={currentMatch} />
        </div>
        {children}
        <ActionsFooter backLink="/app" onAction={onAction} isGame />
      </GameLayoutStyled>
    </PageLayout>
  );
};
