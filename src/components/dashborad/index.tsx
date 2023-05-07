import styled from "styled-components";
import { useUserContext } from "../../context";
import { Text } from "../Text";
import { useNavigate } from "react-router-dom";
import React from "react";
import { getUserAvatar } from "../../utils/ages";
import { ActionsFooter } from "../ActionsFooter";
import { LevelBox } from "./LevelBox";
import { RecordBox } from "./RecordBox";

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

const BoxDivider = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const Dashboard = () => {
  // context
  const navigate = useNavigate();
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
        <BoxDivider>
          <LevelBox level={user?.level ?? 1} />
          <RecordBox record={user?.record ?? 0} />
        </BoxDivider>
      </div>
      <ActionsFooter
        backLink="/"
        onAction={() => {
          console.log("CALLLLL");
          navigate("game");
        }}
      />
    </DashboardStyled>
  );
};
