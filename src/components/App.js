import "reset-css";
import styled, { createGlobalStyle } from "styled-components";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { themes } from "../theme-style";
import { useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:${({ theme }) => themes[theme].body};
    color:${({ theme }) => themes[theme].color};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => themes[theme].color};
  }
  * {
    -webkit-tap-highlight-color:transparent ;
  }
`;
const StyledApp = styled.div`
`;
export const App = () => {
  const props = useSelector((state) => state.props);
  return (
    <StyledApp theme={props.theme} devEnv={props.devEnv}>
      <GlobalStyle theme={props.theme} />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </StyledApp>
  );
};
