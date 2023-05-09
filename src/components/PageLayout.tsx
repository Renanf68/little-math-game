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
  backgroundColor?: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  flex: 1;
  width: 92%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.backgroundColor ?? "white"};
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 390px;
    max-height: 700px;
  }
`;

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}

export const PageLayout = ({
  backgroundColor,
  backgroundImage,
  children,
}: PageLayoutProps) => {
  return (
    <Main>
      <Container
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
      >
        {children}
      </Container>
    </Main>
  );
};
