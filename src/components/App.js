import { useState } from "react";
import "reset-css";
import styled, { createGlobalStyle } from "styled-components";
import { themes } from "../theme-style";
// tools
import { DropInput } from "../UI-components/DropInput";
import { Button } from "../UI-components/Button";
import { Switch } from "../UI-components/Switch";
import { Input } from "../UI-components/Input";
import { DatePicker } from "../UI-components/DatePicker";
import { Tab } from "../UI-components/Tab";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:${({ theme }) => themes[theme].body};
    color:${({ theme }) => themes[theme].color};
    transition:.2s ;
  }
`;
const StyledApp = styled.div`
  @keyframes blurIn {
    0% { filter: blur(1rem); }
    100% { filter: blur(0); }
  }
  .app-content {
    box-sizing:border-box ;
    padding:50px;
  }
  .app-title {
    position: relative;
    width:100% ;
    background-color:#0f0b08 ;
    height: 120px;
    overflow:hidden ;
  }
  .app-title .banner {
    opacity:.8 ;
    position: absolute;
    top:50% ;
    left:50% ;
    transform: translate(-50%,-50%);
    width:500px;
    height:100%;
    background-image:url('./UI-Components/imgs/banner.jpg');
    background-repeat:no-repeat ;
    background-position:center -50px;
    background-size:500px ;
    z-index:1 ;
    animation: blurIn 1s;
  }
  .app-title span {
    position: absolute;
    bottom:10% ;
    left:50% ;
    transform: translate(-50%,0%);
    font-size:14px ;
    color:#fff ;
    text-shadow:0 0 5px rgba(0,0,0,0.6) ;
    z-index:2 ;
  }
  .app-caption {
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
  const [datePickerDemoVal, setDatePickerDemoVal] = useState('YYYY/MM/DD');
  const [tabDemoVal, setTabDemoVal] = useState('Orange');
  return <StyledApp theme={theme}>
    <GlobalStyle theme={theme} />
    <div className="app-title">
      <span>ADAM UI</span>
      <div className="banner"></div>
    </div>
    <div className="app-content">
      <div className="theme-btns">
        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={() => setTheme('dark')}>dark</button>
      </div>
      <div className="app-caption">[ 🍎 drop input ] demo :</div>
      <div className="demo-compnent">
        <DropInput
          theme={theme}
          datalist={[{ value: "Apple", id: 1 }, { value: "Orange", id: 2 }, { value: "Pear", id: 3 }, { value: "Lemon", id: 4 }, { value: "Apple1", id: 5 }, { value: "Orange2", id: 6 }, { value: "Pear3", id: 7 }, { value: "Lemon4", id: 8 }]}
          onClick={(e) => setDropInputDemoVal(e)}
        />
        <div className="compnent-value">value: <span>{dropInputDemoVal.value}</span>, id: <span>{dropInputDemoVal.id}</span></div>
      </div>
      <div className="app-caption">[ 🍎 button ] demo :</div>
      <div className="demo-compnent">
        <Button
          theme={theme}
          onClick={() => setButtonDemoVal('clicked!')}
        />
        <div className="compnent-value">value: <span>{buttonDemoVal}</span></div>
      </div>
      <div className="app-caption">[ 🍎 switch ] demo :</div>
      <div className="demo-compnent">
        <Switch
          theme={theme}
          status={switchDemoVal}
          onChange={() => setSwitchDemoVal(prev => !prev)}
        />
        <div className="compnent-value">value: <span>{switchDemoVal ? 'true' : 'false'}</span></div>
      </div>
      <div className="app-caption">[ 🍎 input ] demo :</div>
      <div className="demo-compnent">
        <Input
          theme={theme}
          datalist={["@fresco.tech", "@google.com"]}
          onChange={(val) => setInputDemoVal(val)}
        />
        <div className="compnent-value">value: <span>{inputDemoVal}</span></div>
      </div>
      <div className="app-caption">[ 🍎 date picker ] demo :</div>
      <div className="demo-compnent">
        <DatePicker theme={theme}
          onClick={(val) => setDatePickerDemoVal(val.selected.format('YYYY/MM/DD'))}
        />
        <div className="compnent-value">value: <span>{datePickerDemoVal}</span></div>
      </div>
      <div className="app-caption">[ 🍎 Tab ] demo :</div>
      <div className="demo-compnent">
        <Tab
          theme={theme}
          defaultId={2}
          dataList={[
            {
              value: 'Apple', id: 1
            }, {
              value: 'Orange', id: 2
            }, {
              value: "Pear", id: 3
            }, {
              value: "Lemon", id: 4
            }
          ]}
          onClick={(val) => setTabDemoVal(val.value)}
        />
        <div className="compnent-value">value: <span>{tabDemoVal}</span></div>
      </div>
    </div>
  </StyledApp>
}
