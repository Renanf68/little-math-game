import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 340px;
  margin: 14px;
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
