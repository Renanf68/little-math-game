import React from "react";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import logo from "../images/logo.png";

const Home = () => {
  // context
  const { user, handleUserName } = useUserContext();
  // state
  const [username, setUsername] = React.useState("");
  // handlers
  const saveName = () => {
    handleUserName(username);
  };
  // UI
  return (
    <PageLayout>
      <div>
        <img src={logo} alt="game logo" width="100%" />
        {!user ? (
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
        ) : (
          <>
            <Text>Olá, {user.name}!</Text>
            <Text>Seu recorde atual é: {user.record}!</Text>
            <Link to="game">
              <Button>Jogar</Button>
            </Link>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
