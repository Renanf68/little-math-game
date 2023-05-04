import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import logo from "../images/logo.png";
import landingImage from "../images/landing.png";
import styled from "styled-components";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

const LandingFlex = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Landing = () => {
  return (
    <PageLayout backgroundImage={landingImage}>
      <LandingFlex>
        <img src={logo} alt="game logo" width="200px" />
        <ContentDiv>
          <Heading lineHeight="3.5rem">Boas-vindas!</Heading>
          <Text lineHeight="3rem">Vamos começar?</Text>
          <Link to="/app" style={{ width: "100%" }}>
            <Button icon="play">Começar</Button>
          </Link>
        </ContentDiv>
      </LandingFlex>
    </PageLayout>
  );
};

export default Landing;
