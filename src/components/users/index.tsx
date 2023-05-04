import React from "react";
import { Button } from "../Button";
import { useUserContext } from "../../context";
import { Input } from "../Input";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCard } from "./UserCard";
import styled, { useTheme } from "styled-components";
import { Icon } from "../Icon";

const UsersFlex = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NewProfileBtn = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Users = () => {
  // context
  const theme = useTheme();
  const { users, handleUserName } = useUserContext();
  // state
  const [isNew, setIsNew] = React.useState(false);
  const [username, setUsername] = React.useState("");
  // handlers
  const saveName = () => {
    if (users?.find((user) => user.name === username)) {
      alert("Já existe um jogador com esse nome. Escolhe outro?");
      return;
    }
    handleUserName(username);
  };
  // UI
  if (users?.length === 0 || isNew) {
    return (
      <UsersFlex>
        <Heading>Olá!</Heading>
        <Text>Me diz qual o seu nome?</Text>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={saveName}>Salvar</Button>
      </UsersFlex>
    );
  }
  return (
    <UsersFlex>
      <div>
        <Heading>Escolha um perfil ou crie um novo</Heading>
        {users?.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
      <NewProfileBtn onClick={() => setIsNew(true)}>
        <Icon icon="plus" />
        <Text fontSize="xl" color={theme.colors.purple}>
          Criar novo perfil
        </Text>
      </NewProfileBtn>
    </UsersFlex>
  );
};
