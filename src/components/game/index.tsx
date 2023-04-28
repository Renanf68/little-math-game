import React from "react";
import { GameFooter } from "./GameFooter";
import { GameHeader } from "./GameHeader";
import { LevelProgress } from "../LevelProgress";
import { PageLayout } from "../PageLayout";
import { Text } from "../Text";
import styled from "styled-components";
import { Matches } from "../../types";

const GameLayoutStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface GameLayoutProps {
  userLevel?: number;
  userScore: number;
  matches: Matches[];
  currentMatch: number;
  children: React.ReactNode;
}

export const GameLayout = ({
  userLevel,
  userScore,
  matches,
  currentMatch,
  children,
}: GameLayoutProps) => {
  return (
    <PageLayout>
      <GameLayoutStyled id="game-layout">
        <div>
          <GameHeader>
            <Text>Nível {userLevel}</Text>
            <Text>Pontos: {userScore}</Text>
          </GameHeader>
          <LevelProgress matches={matches} currentMatch={currentMatch} />
        </div>
        {children}
        <GameFooter />
      </GameLayoutStyled>
    </PageLayout>
  );
};
