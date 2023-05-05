import styled from "styled-components";
import { useUserContext } from "../../context";
import { Text } from "../Text";
import { redirect } from "react-router-dom";
import React from "react";
import { getUserAvatar } from "../../utils/ages";
import { ActionsFooter } from "../ActionsFooter";

const DashboardStyled = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fill-available;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Dashboard = () => {
  // context
  const { user } = useUserContext();
  // helpers
  const avatar = React.useMemo(() => {
    if (!user?.age) return null;
    return getUserAvatar(user.age);
  }, [user?.age]);
  // UI
  return (
    <DashboardStyled>
      <div>
        <Header>
          {avatar && (
            <img src={avatar} width="32px" alt={`número ${user!.age}`} />
          )}
          <Text marginLeft="12px" fontSize="xl" fontWeight="500">
            Olá, {user!.name}!
          </Text>
        </Header>
        <Text>Você está no nível: {user!.level}!</Text>
        <Text>Seu recorde atual é: {user!.record}!</Text>
      </div>
      <ActionsFooter backLink="/users" onAction={() => redirect("/game")} />
    </DashboardStyled>
  );
};
