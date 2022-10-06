import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import cx from 'classnames';
import { srcPath } from "../../tools";
import { themes } from "../../tools/themes";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../reducer/props";

const StyledHeader = styled.header`
  position: relative;
  width:100% ;
  background-color:${({ props }) => themes[props.theme].bottom};
  box-sizing:border-box ;
  padding:0 20px ;
  box-shadow:0 0 12px rgba(0,0,0,0.1) ;
  z-index:99 ;
  .header-wrap {
    height:65px ;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between ;
  }
  .logo {
    width:80px;
  }
  .route-links {
    display:flex ;
    align-items:center ;
  }
  .route-links .links {
    color: ${({ props }) => themes[props.theme].color};
    margin-right:25px ;
    font-weight:bold ;
    &.active {
      color: ${({ props }) => themes[props.theme].main};
    }
  }
  .theme-selector {
    display:flex ;
    align-items:center ;
    align-items:center ;
  }
  .theme-selector button {
    border-radius:50px ;
    box-sizing:border-box ;
    padding:6px 12px ;
    font-size:14px ;
    border:0 ;
    margin-right:12px ;
    color: ${({ props }) => themes[props.theme].color};
    background-color: ${({ props }) => themes[props.theme].sub};
    cursor: pointer;
    &.active {
      background-color: ${({ props }) => themes[props.theme].main};
      color: ${({ props }) => themes[props.theme].btnColor};
    }
    &:last-child {
      margin-right:0 ;
    }
  }
`;

const links = [
  {
    name: 'Home',
    link: "/home"
  },
  {
    name: 'Doc',
    link: "/doc"
  },
  {
    name: 'Components',
    link: "/components"
  },
];

export const Header = () => {
  const props = useSelector((state) => state.props);
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  return <StyledHeader
    props={{
      theme: props.theme,
      devEnv: props.devEnv
    }}>
    <div className="header-wrap">
      <img className="logo" alt="" src={srcPath(props.devEnv, `svg/logo-${props.theme === 'light' ? "light" : "dark"}.svg`)} />
      <div className="route-links">
        {links.map((val, key) => <Link className={cx("links", { active: pathname === val.link })} key={key} to={val.link}>{val.name} /</Link>)}
        <div className="theme-selector">
          <button className={cx({ active: props.theme === 'light' })}
            onClick={() => { dispatch(setTheme('light')) }}>Light</button>
          <button className={cx({ active: props.theme === 'dark' })} onClick={() => { dispatch(setTheme('dark')) }}>Dark</button>
        </div>
      </div>
    </div>
  </StyledHeader>
}