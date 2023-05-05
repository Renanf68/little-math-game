import styled, { useTheme } from "styled-components";
import number6 from "../../images/number6.png";
import diamond from "../../images/diamond.png";
import { Text } from "../Text";
import { User } from "../../types";
import { useUserContext } from "../../context";

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

const BoxesDiamondBox = styled.div`
  width: 12px;
  height: auto;
  margin-right: 8px;
`;

const LevelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${(props) => props.theme.colors.lightYellow};
  border-radius: 10px;
`;

const ScoreBox = styled.div`
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${(props) => props.theme.colors.lightGreen};
  border-radius: 10px;
`;

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  // context
  const theme = useTheme();
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
          <LevelBox>
            <Text fontSize="xs" color={theme.colors.yellow}>
              Nível {user.level}
            </Text>
          </LevelBox>
          <ScoreBox>
            <BoxesDiamondBox>
              <img src={diamond} alt="pequeno diamante" width="100%" />
            </BoxesDiamondBox>
            <Text fontSize="xs" color={theme.colors.green}>
              {user.record}
            </Text>
          </ScoreBox>
        </BoxesFlex>
      </UserInfosFlex>
    </UserCardStyled>
  );
};
