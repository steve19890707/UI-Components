import styled from "styled-components";
import { useSelector } from "react-redux";
import { themes } from "../tools/themes";

const StyledHome = styled.div`
  .main-title {
    margin-top: 50px;
    text-align:center ;
    font-size:20px ;
    font-weight:bold ;
  }
  .main-box {
    max-width:600px ;
    margin:25px auto ;
    padding:25px ;
    box-sizing:border-box ;
    border-radius: 8px;
    background-color: ${({ props }) => themes[props.theme].bottom} ;
    box-shadow:0 0 12px rgba(0,0,0,0.1);
    .texts {
      padding:20px;
      box-sizing:border-box ;
      border-radius:6px ;
      border: 1px solid ${({ props }) => themes[props.theme].border} ;
      margin-bottom:25px ;
      &:last-child {
        margin-bottom:0 ;
      }
    }
    .cpation {
      color:  ${({ props }) => themes[props.theme].border} ;
      margin-right:20px ;
    }
    .list-cap {
      margin-top:15px ;
      color:  ${({ props }) => themes[props.theme].main} ;
    }
  }
`;

export const Home = () => {
  const props = useSelector((state) => state.props);
  return <StyledHome
    props={{
      theme: props.theme,
      devEnv: props.devEnv
    }}
  >
    <div className="main-title">Welcome to ADAM UI</div>
    <div className="main-box">
      <div className="texts">
        <span className="cpation">quick start:</span>
        <span className="val">npm i adam-ui-beta -D</span>
      </div>
      <div className="texts">
        <div >[develop using packages]</div>
        <div className="list-cap">- react-icons(4.4.0)</div>
        <div className="list-cap">- styled-components(5.3.5)</div>
        <div className="list-cap">- lodash(4.17.21)</div>
        <div className="list-cap">- moment(2.29.4)</div>
        <div className="list-cap">- classnames(2.3.2)</div>
      </div>
    </div>
  </StyledHome>
}