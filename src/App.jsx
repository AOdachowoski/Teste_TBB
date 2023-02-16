import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}
