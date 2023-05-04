import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.lightPurple};
`;

interface ContainerProps {
  backgroundImage?: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  flex: 1;
  width: 90%;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.lighterPurple};
  @media (min-width: 768px) {
    max-width: 390px;
    max-height: 700px;
  }
`;

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

export const PageLayout = ({ backgroundImage, children }: PageLayoutProps) => {
  return (
    <Main>
      <Container backgroundImage={backgroundImage}>{children}</Container>
    </Main>
  );
};
