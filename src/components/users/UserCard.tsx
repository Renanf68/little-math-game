import styled from "styled-components";
import avatar from "../../images/avatar.png";
import { Text } from "../Text";
import { User } from "../../types";
import { useUserContext } from "../../context";

const UserCardStyled = styled.div`
  width: fill-available;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 14px;
  cursor: pointer;
`;

const UserAvatarBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 18px;
  overflow: hidden;
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
        <img src={avatar} alt="avatar do usuário" width="100%" />
      </UserAvatarBox>
      <Text style={{ marginLeft: "14px" }}>{user.name}</Text>
    </UserCardStyled>
  );
};
