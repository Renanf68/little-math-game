import styled from "styled-components";
import number6 from "../../images/number6.png";
import { Text } from "../Text";
import { User } from "../../types";
import { useUserContext } from "../../context";
import { LevelBadge } from "../LevelBadge";
import { ScoreBadge } from "../ScoreBadge";

const UserCardStyled = styled.div`
  margin-top: 24px;
  width: fill-available;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 14px;
  background-color: white;
  cursor: pointer;
`;

const UserAvatarBox = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
`;

const UserInfosFlex = styled.div`
  margin-left: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxesFlex = styled.div`
  display: flex;
`;

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  // context
  const { handleUserSelect } = useUserContext();
  // UI
  return (
    <UserCardStyled onClick={() => handleUserSelect(user)}>
      <UserAvatarBox>
        <img src={number6} alt="avatar do usuário" width="100%" />
      </UserAvatarBox>
      <UserInfosFlex>
        <Text fontSize="xl" fontWeight="500" lineHeight="0">
          {user.name}
        </Text>
        <BoxesFlex>
          <LevelBadge level={user.level ?? 1} />
          <ScoreBadge score={user.record ?? 0} />
        </BoxesFlex>
      </UserInfosFlex>
    </UserCardStyled>
  );
};
