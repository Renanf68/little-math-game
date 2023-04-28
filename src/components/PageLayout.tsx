import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.lighterBlue};
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 90%;
  padding: 16px;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    max-width: 390px;
    max-height: 600px;
  }
`;

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
};
