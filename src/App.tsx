import { Router } from "./routes/routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { UserProvider } from "./context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router />
        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
