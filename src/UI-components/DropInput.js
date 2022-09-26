import { useState, useEffect } from "react";
import { noop } from "lodash";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { themes } from "../theme-style";

const StyledDropInput = styled.div`
  @keyframes listDrop {
    0% {
      opacity:0 ;
      max-height:0px;
    };
    100% {
      opacity:1 ;
      max-height:200px;
    };
  }
  input {
    width: 100%;
    outline: 0;
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius:8px;
    font-size: ${({ props }) => props.fontSize};
    border:2px solid ${({ props }) => props.themeColor.sub};
    background-color:${({ props }) => props.themeColor.bottom};
    color: ${({ props }) => props.themeColor.color};
    transition:.2s ;
    cursor: pointer;
  }
  input::placeholder {
    color: ${({ props }) => props.themeColor.placeholder};
  }
  &:hover input {
    border:2px solid ${({ props }) => props.themeColor.main};
  }
  position: relative;
  width: ${({ props }) => props.width};
  cursor: pointer;
  .svg-IoMdArrowDropdown {
    position: absolute;
    top:50% ;
    right:10px ;
    height:${({ props }) => props.fontSize};
    width:${({ props }) => props.fontSize};
    fill: ${({ props }) => props.themeColor.color};
    transform:${({ props }) => props.dropStatus ? `translateY(-50%)rotate(180deg)` : `translateY(-50%)rotate(0deg)`
  };
    transition:.3s;
  }
  .data-list {
    opacity:0 ;
    position: absolute;
    top: 100%;
    left: 0;
    width:100%;
    background-color:${({ props }) => props.themeColor.bottom};
    box-sizing: border-box;
    border-radius:0 0 8px 8px;
    box-shadow:0 3px 8px 0 ${({ props }) => props.themeColor.dark};
    border:2px solid ${({ props }) => props.themeColor.sub};
    overflow:auto ;
    max-height:0;
    animation: ${({ props }) => props.dropStatus ? 'listDrop .2s forwards' : 'unset'};
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ props }) => props.themeColor.sub};
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ props }) => props.themeColor.main};
      border-radius: 10px;
      border: 2px solid ${({ props }) => props.themeColor.sub};
    }
  }
  .data {
    padding:8px 16px;
    box-sizing:border-box ;
    color:${({ props }) => props.themeColor.color};
    font-size:${({ props }) => props.fontSize};
    transition:.2s ;
    &:hover {
      background-color: ${({ props }) => props.themeColor.main};
      color:${({ props }) => props.themeColor.bottom};
    }
  }
`;

export const DropInput = ({
  datalist = [],
  theme = 'light',
  width = '180px',
  fontSize = '14px',
  placeholder = 'select please',
  onClick = noop
}) => {
  const [inputValue, setInputValue] = useState('');
  const [dropStatus, setDropStatus] = useState(false);
  const makeid = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  const id = `ui-dropinput-${makeid(6)}`;
  useEffect(() => {
    const handler = (e) => {
      const thisDom = document.getElementById(id);
      if (thisDom && !thisDom.contains(e.target)) {
        setDropStatus(false);
      }
    }
    // Bind the event listener
    document.addEventListener("click", handler);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handler);
    };
  })
  return <StyledDropInput
    id={id}
    props={{
      themeColor: themes[theme] || themes.light,
      width: width,
      fontSize: fontSize,
      dropStatus: dropStatus,
    }}
    onClick={() => setDropStatus(prev => !prev)}
  >
    <input placeholder={placeholder} readOnly value={inputValue}></input>
    <IoMdArrowDropdown className="svg-IoMdArrowDropdown" />
    <div className="data-list">
      {datalist.map((val, key) => <div key={key} className="data"
        onClick={() => {
          const values = {
            index: key + 1,
            value: val,
          }
          setInputValue(val);
          onClick(values);
        }}
      >{val}</div>)}
    </div>
  </StyledDropInput>
}