import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Aside } from "../Common/Aside";
import { themes } from "../../tools/themes";
import { GeneralButton, GeneralDropInput, GeneralInput, GeneralSwitch, GeneralTab, GeneralTags } from "./General";
import { LayoutList } from "./Layout";
import { NavigationDragDrop, NavigationDatePicker } from "./Navigation";

const StyledComponents = styled.div`
  display:flex ;
  .components-container {
    width:calc(100% - 265px) ;
    margin:25px ;
    color: ${({ props }) => themes[props.theme].color};
    background-color:${({ props }) => themes[props.theme].sub2};
    padding: 20px;
    box-sizing:border-box ;
  }
`;

const StyledFetchComps = styled.div`
  .fetchComps-type {
    font-size:18px ;
    margin-bottom:25px ;
  }
  .fetchComps-value {
    font-size:16px ;
    margin-top:25px ;
  }
  .flex-box {
    display:flex ;
    align-items:center ;
  }
  .br {
    width:20px ;
  }
  .br-h {
    height:25px ;
  }
`;

const CompnentsLayout = ({
  children,
  keyname = "",
  val = ""
}) => {
  return <StyledFetchComps>
    <div className="fetchComps-type">
      Type: [ 🍎 {keyname} ]
    </div>
    {children}
    <div className="fetchComps-value">
      Value: <span>[ 🍎 {val} ]</span>
    </div>
  </StyledFetchComps>
};

const FetchComps = ({ keyname = '', theme = '' }) => {
  const [demoVal, setDemoVal] = useState("");
  const [demoStatus, setDemoStatus] = useState(false);
  useEffect(() => {
    setDemoVal("");
    setDemoStatus(false);
  }, [keyname]);
  switch (keyname) {
    case "general-button":
      return <CompnentsLayout
        keyname={keyname}
        children={<GeneralButton theme={theme}
          onClick={() => setDemoVal("clicked!")}
        />}
        val={demoVal}
      />
    case "general-dropInput":
      return <CompnentsLayout
        keyname={keyname}
        children={<GeneralDropInput theme={theme}
          onClick={(e) => setDemoVal(JSON.stringify(e))}
        />}
        val={demoVal}
      />
    case "general-input":
      return <CompnentsLayout
        keyname={keyname}
        children={<GeneralInput
          theme={theme}
          onChange={(e) => setDemoVal(e)}
        />}
        val={demoVal}
      />
    case "general-switch":
      return <CompnentsLayout
        keyname={keyname}
        children={<GeneralSwitch
          theme={theme}
          status={demoStatus}
          onChange={() => setDemoStatus(prev => !prev)}
        />}
        val={`${demoStatus ? "true" : "false"}`}
      />
    case "general-tab":
      return <CompnentsLayout
        keyname={keyname}
        children={
          <div className="flex-box">
            <GeneralTab
              theme={theme}
              onClick={(e) => setDemoVal(e.value)}
            />
          </div>}
        theme={theme}
        val={demoVal}
      />
    case "general-tags":
      return <CompnentsLayout
        keyname={keyname}
        children={
          <div className="flex-box">
            <GeneralTags
              theme={theme}
              value="default"
            />
            <div className="br" />
            <GeneralTags
              theme={theme}
              type="hashtag"
              value="hashtag"
            />
            <div className="br" />
            <GeneralTags
              theme={theme}
              type="horizontal"
              value="horizontal"
            />
          </div>
        }
      />
    case "layout-list":
      return <CompnentsLayout
        keyname={keyname}
        children={
          <div>
            <LayoutList
              theme={theme}
              header="Default data type"
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
              ]}
            />
            <div className="br-h" />
            <LayoutList
              theme={theme}
              header="Multiple data type"
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
        }
      />
    case "navigation-dragdrop":
      return <CompnentsLayout
        keyname={keyname}
        children={<NavigationDragDrop
          theme={theme}
          onChange={(e) => setDemoVal(`${JSON.stringify(e)}`)}
        />}
        val={demoVal}
      />
    case "navigation-datepicker":
      return <CompnentsLayout
        keyname={keyname}
        children={<NavigationDatePicker
          theme={theme}
          onClick={(e) => setDemoVal(e.selected.format("YYYY/MM/DD"))}
        />}
        val={demoVal}
      />
    default:
      return;
  }
}

export const Components = () => {
  const props = useSelector((state) => state.props);
  return <StyledComponents
    props={{
      theme: props.theme,
      devEnv: props.devEnv
    }}
  >
    <Aside list={list} />
    <div className="components-container">
      <FetchComps
        keyname={props.asideKeyname}
        theme={props.theme}
      />
    </div>
  </StyledComponents>
};

const list = [
  {
    type: 'General',
    array: [
      {
        name: 'Button',
        key: 'general-button'
      },
      {
        name: 'DropInput',
        key: 'general-dropInput'
      },
      {
        name: 'Input',
        key: 'general-input'
      },
      {
        name: 'Switch',
        key: 'general-switch'
      },
      {
        name: 'Tab',
        key: 'general-tab'
      },
      {
        name: 'Tags',
        key: 'general-tags'
      },
    ]
  },
  {
    type: 'Layout',
    array: [
      {
        name: 'List',
        key: 'layout-list'
      },
    ]
  },
  {
    type: 'Navigation',
    array: [
      {
        name: 'Drag Drop',
        key: 'navigation-dragdrop'
      },
      {
        name: 'Date Picker',
        key: 'navigation-datepicker'
      },
    ]
  }
]