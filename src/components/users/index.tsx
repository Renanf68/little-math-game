import React from "react";
import { Button } from "../Button";
import { useUserContext } from "../../context";
import { Input } from "../Input";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCard } from "./UserCard";

export const Users = () => {
  // context
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
      <>
        <Heading>Olá!</Heading>
        <Text>Me diz qual o seu nome?</Text>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={saveName}>Salvar</Button>
      </>
    );
  }
  return (
    <>
      {users?.map((user) => (
        <UserCard key={user.name} user={user} />
      ))}
      <Text
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={() => setIsNew(true)}
      >
        Criar novo
      </Text>
    </>
  );
};
