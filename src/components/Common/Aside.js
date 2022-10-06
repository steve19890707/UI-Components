import { useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import { themes } from "../../tools/themes";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHandPointRight } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { setAsideKeyname } from "../../reducer/props";

const StyledAside = styled.div`
  position:relative;
  width: 250px;
  height: calc(100vh - 65px);
  overflow:auto ;
  font-size:16px ;
  color: ${({ props }) => themes[props.theme].color};
  background-color:${({ props }) => themes[props.theme].bottom};
  border-right:1px solid ${({ props }) => themes[props.theme].border2};
  .aside-container .list{
    position:relative ;
    padding:16px 20px;
    border-bottom:1px solid ${({ props }) => themes[props.theme].border2};
    display:flex ;
    align-items:center ;
    box-sizing:border-box ;
    cursor: pointer;
    &.active {
      color: ${({ props }) => themes[props.theme].main};
    }
    &.drop .svg-IoMdArrowDropdown{
      transform:translateY(-50%) rotate(180deg) ;
    }
  }
  .svg-IoMdArrowDropdown {
    position:absolute ;
    top:50% ;
    right: 12px;
    width:16px ;
    height:16px ;
    transform:translateY(-50%) rotate(0deg) ;
    transition:.3s;
  }
  .svg-FaRegHandPointRight {
    width:18px ;
    height:18px ;
    margin-right: 15px;
  }
  .svg-MdSubdirectoryArrowRight {
    width:16px ;
    height:16px ;
    margin-right: 12px;
  }
  .aside-container .list-drop-content {
    border-bottom:1px solid ${({ props }) => themes[props.theme].border2};
    background-color: ${({ props }) => themes[props.theme].sub2};
  }
  .aside-container .list-drop {
    padding: 16px 20px 16px 36px;
    box-sizing:border-box ;
    display:flex ;
    align-items:center ;
    font-size:14px ;
    cursor: pointer;
    &.active {
      background-color: ${({ props }) => themes[props.theme].main};
      color: ${({ props }) => themes[props.theme].btnColor};
    }
  }
`;

const BuildAsideList = ({ value = 'caption', array = [] }) => {
  const props = useSelector((state) => state.props);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const splitCaptionKey = props.asideKeyname.split('-')[0];
  return <>
    <div className={cx("list", { 'active': splitCaptionKey === value.toLocaleLowerCase(), 'drop': status })}
      onClick={() => setStatus(prev => !prev)}
    >
      <FaRegHandPointRight className="svg-FaRegHandPointRight" />
      <span>[ {value} ]</span>
      <IoMdArrowDropdown className="svg-IoMdArrowDropdown" />
    </div>
    {status && <div className="list-drop-content">
      {array.map((val, key) => <div
        className={cx("list-drop", { 'active': props.asideKeyname === val.key })}
        key={key}
        onClick={() => {
          dispatch(setAsideKeyname(val.key))
        }}
      >
        <MdSubdirectoryArrowRight
          className="svg-MdSubdirectoryArrowRight"
        />
        <span>{val.name}</span>
      </div>)}
    </div>
    }
  </>
}

export const Aside = ({
  list = [],
}) => {
  const props = useSelector((state) => state.props);
  return <StyledAside
    props={{
      theme: props.theme,
      devEnv: props.devEnv
    }}
  >
    <div className="aside-container">
      {list.map((val, key) => <BuildAsideList
        key={key}
        value={val.type}
        array={val.array}
      />)}
    </div>
  </StyledAside>
}