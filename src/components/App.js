import { useState } from "react";
import "reset-css";
import styled, { createGlobalStyle } from "styled-components";
import { themes } from "../theme-style";
// tools
import { DropInput } from "../UI-components/DropInput";
import { Button } from "../UI-components/Button";
import { Switch } from "../UI-components/Switch";
import { Input } from "../UI-components/Input";

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
  .title {
    font-size:24px;
    font-weight:bold ;
    margin-bottom:50px ;
  }
  .caption {
    font-size:16px;
    font-weight:bold ;
    margin-bottom:25px ;
  }
  .theme-btns {
    display:flex ;
    align-items:center ;
    margin-bottom:25px ;
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
  .demo-compnent {
    display:flex ;
    align-items:center ;
    margin-bottom: 50px;
  }
  .compnent-value {
    font-size:16px;
    margin-left:20px;
    span {
      color: ${({ theme }) => themes[theme].main};
    }
  }
`;
export const App = () => {
  const [theme, setTheme] = useState('light')
  const [dropInputDemoVal, setDropInputDemoVal] = useState('');
  const [buttonDemoVal, setButtonDemoVal] = useState('');
  const [switchDemoVal, setSwitchDemoVal] = useState(false);
  const [inputDemoVal, setInputDemoVal] = useState('');
  return <StyledApp theme={theme}>
    <GlobalStyle theme={theme} />    <div className="theme-btns">
      <button onClick={() => setTheme('light')}>light</button>
      <button onClick={() => setTheme('dark')}>dark</button>
    </div>
    <div className="title">💪 Welcome Use Muscle UI 💪</div>
    <div className="caption">[ drop input ] demo :</div>
    <div className="demo-compnent">
      <DropInput
        theme={theme}
        datalist={["Apple", "Orange", "Pear", "Lemon", "Apple1", "Orange2", "Pear3", "Lemon4"]}
        onClick={(e) => setDropInputDemoVal(e)}
      />
      <div className="compnent-value">value: <span>{dropInputDemoVal.value}</span>, index: <span>{dropInputDemoVal.index}</span></div>
    </div>
    <div className="caption">[ button ] demo :</div>
    <div className="demo-compnent">
      <Button
        theme={theme}
        onClick={() => setButtonDemoVal('clicked!')}
      />
      <div className="compnent-value">value: <span>{buttonDemoVal}</span></div>
    </div>
    <div className="caption">[ switch ] demo :</div>
    <div className="demo-compnent">
      <Switch
        theme={theme}
        status={switchDemoVal}
        onChange={() => setSwitchDemoVal(prev => !prev)}
      />
      <div className="compnent-value">value: <span>{switchDemoVal ? 'true' : 'false'}</span></div>
    </div>
    <div className="caption">[ input ] demo :</div>
    <div className="demo-compnent">
      <Input
        theme={theme}
        datalist={["@fresco.tech", "@google.com"]}
        onChange={(val) => setInputDemoVal(val)}
      />
      <div className="compnent-value">value: <span>{inputDemoVal}</span></div>
    </div>
  </StyledApp>
}
