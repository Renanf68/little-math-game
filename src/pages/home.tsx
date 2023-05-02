import React from "react";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Link } from "react-router-dom";
import { Text } from "../components/Text";
import logo from "../images/logo.png";
import { Users } from "../components/users";

const Home = () => {
  // context
  const { user } = useUserContext();
  // UI
  return (
    <PageLayout>
      <div>
        <img src={logo} alt="game logo" width="100%" />
        {!user ? (
          <Users />
        ) : (
          <>
            <Text>Olá, {user.name}!</Text>
            <Text>Você está no nível: {user.level}!</Text>
            <Text>Seu recorde atual é: {user.record}!</Text>
            <Link to="game">
              <Button>{(user?.level ?? 1) > 1 ? "Continuar" : "Jogar"}</Button>
            </Link>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
