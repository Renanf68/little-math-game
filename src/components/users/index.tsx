import React from "react";
import { Button } from "../Button";
import { useUserContext } from "../../context";
import { Input } from "../Input";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCard } from "./UserCard";
import styled, { useTheme } from "styled-components";
import { Icon } from "../Icon";
import { AgeSelect } from "./AgeSelect";

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

const Flex = styled.div`
  margin-top: 16px;
  padding: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  width: fill-available;
  min-height: 112px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const ButtonsFlex = styled.div`
  width: fill-available;
  display: flex;
`;

export const Users = () => {
  // context
  const theme = useTheme();
  const { users, handleNewUser } = useUserContext();
  // state
  const [isNew, setIsNew] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [userAge, setUserAge] = React.useState<number>();
  // handlers
  const saveUser = () => {
    if (users?.find((user) => user.name === username)) {
      alert("Já existe um jogador com esse nome. Escolhe outro?");
      return;
    }
    handleNewUser(username, userAge!);
  };
  // UI
  if (users?.length === 0 || isNew) {
    return (
      <UsersFlex>
        <div style={{ width: "100%" }}>
          <Heading fontSize="5xl" marginBottom="24px">
            Olá!
          </Heading>
          <Flex>
            <Text fontSize="xl" fontWeight="500">
              Me diz qual o seu nome?
            </Text>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Flex>
          <AgeSelect
            selected={userAge}
            onSelect={(value) => setUserAge(value)}
          />
        </div>
        <ButtonsFlex>
          <Button variant="secondary" onClick={() => setIsNew(false)}>
            Voltar
          </Button>
          <Button
            marginLeft="14px"
            onClick={saveUser}
            disabled={username.length === 0 || !userAge}
          >
            Salvar
          </Button>
        </ButtonsFlex>
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
