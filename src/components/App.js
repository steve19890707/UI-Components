import { useState } from "react";
import "reset-css";
import styled, { createGlobalStyle } from "styled-components";
import { themes } from "../theme-style";
// tools
import { DropInput } from "../UI-components/DropInput";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:${({ theme }) => themes[theme].body};
    color:${({ theme }) => themes[theme].color};
    transition:.2s ;
  }
`;
const StyledApp = styled.div`
  box-sizing:border-box ;
  padding:50px ;
  .caption {
    font-size:16px;
    font-weight:bold ;
    margin-bottom:25px ;
  }
  .theme-btns {
    display:flex ;
    align-items:center ;
    margin-bottom:50px ;
    button {
      border-radius: 50px;
      padding:8px 16px;
      border:0 ;
      font-size:16px;
      box-shadow: 0 0 5px rgba(0,0,0,0.3);
      cursor: pointer;
    }
    button:nth-child(1){
      background-color: ${themes.light.bottom};
      color: ${themes.light.color};
      margin-right: 12px;
    }
    button:nth-child(2){
      background-color: ${themes.dark.bottom};
      color: ${themes.dark.color};
      margin-right: 12px;
    }
  }
`;
export const App = () => {
  const [theme, setTheme] = useState('light')
  return <StyledApp>
    <GlobalStyle theme={theme} />
    <div className="theme-btns">
      <button onClick={() => setTheme('light')}>light</button>
      <button onClick={() => setTheme('dark')}>dark</button>
    </div>
    <div className="caption">[ drop input ] demo :</div>
    <DropInput
      theme={theme}
      datalist={["Apple", "Orange", "Pear", "Lemon", "Apple1", "Orange2", "Pear3", "Lemon4"]}
      onClick={(e) => console.log(e)}
    />
  </StyledApp>
}
