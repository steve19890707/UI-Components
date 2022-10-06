import "reset-css";
import styled, { createGlobalStyle } from "styled-components";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { themes } from "../theme-style";
import { useSelector } from "react-redux";
// tools
// import { Button, DatePicker, Input, Tab, Switch, DropInput, List, Tags, DragDrop } from "adam-ui-beta";

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

      {/* <div className="app-title">
        <span>ADAM UI</span>
        <div className="banner"></div>
      </div>
      <div className="app-content">
        <div className="theme-btns">
          <button onClick={() => setTheme("light")}>light</button>
          <button onClick={() => setTheme("dark")}>dark</button>
        </div>
        <div className="app-caption">[ 🍎 drop input ] demo :</div>
        <div className="demo-compnent">
          <DropInput
            theme={theme}
            datalist={[
              { value: "Apple", id: 1 },
              { value: "Orange", id: 2 },
              { value: "Pear", id: 3 },
              { value: "Lemon", id: 4 },
              { value: "Apple1", id: 5 },
              { value: "Orange2", id: 6 },
              { value: "Pear3", id: 7 },
              { value: "Lemon4", id: 8 },
            ]}
            onClick={(e) => setDropInputDemoVal(e)}
          />
          <div className="compnent-value">
            value: <span>{dropInputDemoVal.value}</span>, id:{" "}
            <span>{dropInputDemoVal.id}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 button ] demo :</div>
        <div className="demo-compnent">
          <Button theme={theme} onClick={() => setButtonDemoVal("clicked!")} />
          <div className="compnent-value">
            value: <span>{buttonDemoVal}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 switch ] demo :</div>
        <div className="demo-compnent">
          <Switch
            theme={theme}
            status={switchDemoVal}
            onChange={() => setSwitchDemoVal((prev) => !prev)}
          />
          <div className="compnent-value">
            value: <span>{switchDemoVal ? "true" : "false"}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 input ] demo :</div>
        <div className="demo-compnent">
          <Input
            theme={theme}
            datalist={["@fresco.tech", "@google.com"]}
            onChange={(val) => setInputDemoVal(val)}
          />
          <div className="compnent-value">
            value: <span>{inputDemoVal}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 date picker ] demo :</div>
        <div className="demo-compnent">
          <DatePicker
            theme={theme}
            onClick={(val) =>
              setDatePickerDemoVal(val.selected.format("YYYY/MM/DD"))
            }
          />
          <div className="compnent-value">
            value: <span>{datePickerDemoVal}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 Tab ] demo :</div>
        <div className="demo-compnent">
          <Tab
            theme={theme}
            defaultId={2}
            dataList={[
              {
                value: "Apple",
                id: 1,
              },
              {
                value: "Orange",
                id: 2,
              },
              {
                value: "Pear",
                id: 3,
              },
              {
                value: "Lemon",
                id: 4,
              },
            ]}
            onClick={(val) => setTabDemoVal(val.value)}
          />
          <div className="compnent-value">
            value: <span>{tabDemoVal}</span>
          </div>
        </div>
        <div className="app-caption">[ 🍎 List ] demo :</div>
        <div className="demo-compnent">
          <List
            theme={theme}
            header="Single Data List"
            data={[
              "Racing car sprays burning fuel into crowd.",
              "Japanese princess to wed commoner.",
              "Australian walks 100km after outback crash.",
            ]}
          />
        </div>
        <div className="demo-compnent">
          <List
            theme={theme}
            header="Multiple Data List"
            dataType="multiple"
            data={[
              {
                title: "data caption-1",
                data: [
                  "Racing car sprays burning fuel into crowd.",
                  "Japanese princess to wed commoner.",
                  "Australian walks 100km after outback crash.",
                ],
              },
              {
                title: "data caption-2",
                data: [
                  "Racing car sprays burning fuel into crowd.",
                  "Japanese princess to wed commoner.",
                  "Australian walks 100km after outback crash.",
                ],
              },
              {
                title: "data caption-3",
                data: [
                  "Racing car sprays burning fuel into crowd.",
                  "Japanese princess to wed commoner.",
                  "Australian walks 100km after outback crash.",
                ],
              },
            ]}
          />
        </div>
        <div className="app-caption">[ 🍎 Tags ] demo :</div>
        <div className="demo-compnent">
          <Tags />
          <span className="demo-seprate">/</span>
          <Tags type="hashtag" />
          <span className="demo-seprate">/</span>
          <Tags type="horizontal" />
        </div>
        <div className="demo-compnent">
          <DragDrop
            dataList={[{
              title: 'DragDrop',
              list: ["task:1", "task:2", "task:3", "task:4"]
            },
            {
              title: 'DragDrop',
              list: ["task:a", "task:b", "task:c", "task:d"]
            },
            {
              title: 'DragDrop',
              list: ["task:q", "task:w", "task:e", "task:r"]
            },
            ]}
            onChange={(e) => setDragDropDemoVal(e)}
          />
        </div>
        <div className="demo-compnent">
          <div className="compnent-value">
            task 1 :
            {dragDropDemoVal.length > 0 && dragDropDemoVal[0].list.map((v, k) => <span key={k}>[{v}]</span>)}
          </div>
          <div className="compnent-value">
            task 2 :
            {dragDropDemoVal.length > 0 && dragDropDemoVal[1].list.map((v, k) => <span key={k}>[{v}]</span>)}
          </div>
          <div className="compnent-value">
            task 3 :
            {dragDropDemoVal.length > 0 && dragDropDemoVal[2].list.map((v, k) => <span key={k}>[{v}]</span>)}
          </div>
        </div>
      </div> */}
    </StyledApp>
  );
};
