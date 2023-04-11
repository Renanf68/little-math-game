import React from "react";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";

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
  if (!user) {
    return (
      <PageLayout>
        <h2>Olá!</h2>
        <p>Me diz qual o seu nome?</p>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={saveName}>Salvar</Button>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <div>
        <h1>Jogo da Matemática</h1>
        <h2>Olá, {user.name}!</h2>
        <h2>Seu recorde atual é: {user.record}!</h2>
        <Link to="game">
          <Button>Jogar</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Home;
