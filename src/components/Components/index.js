import styled from "styled-components";
import { useSelector } from "react-redux";
import { Aside } from "../Common/Aside";
import { themes } from "../../tools/themes";
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

export const Components = () => {
  const props = useSelector((state) => state.props);
  return <StyledComponents
    props={{
      theme: props.theme,
      devEnv: props.devEnv
    }}
  >
    <Aside list={list} />
    <div className="components-container"></div>
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