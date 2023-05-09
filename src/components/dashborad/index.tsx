import styled from "styled-components";
import { useUserContext } from "../../context";
import { Text } from "../Text";
import { useNavigate } from "react-router-dom";
import React from "react";
import { getUserAvatar } from "../../utils/ages";
import { ActionsFooter } from "../ActionsFooter";
import { LevelBox } from "./LevelBox";
import { RecordBox } from "./RecordBox";
import { FlashBox } from "./FlashBox";
import { ThermoBox } from "./ThermoBox";

const DashboardStyled = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fill-available;
  padding-bottom: 96px;
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
          <LevelBox level={user!.level} />
          <RecordBox record={user!.record} />
        </BoxDivider>
        <FlashBox power={user!.power} />
        <ThermoBox userLevel={user!.level} />
      </div>
      <ActionsFooter backLink="/" onAction={() => navigate("game")} />
    </DashboardStyled>
  );
};
