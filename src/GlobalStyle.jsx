import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  
}
  html{
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.white};
    font-family: 'Raleway', sans-serif;
  }
  body::-webkit-scrollbar {
    width: 10px;  
  }
  
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.blue};       
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray};
    border-radius: 10px; 
  }
`;