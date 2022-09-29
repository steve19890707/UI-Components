// import { noop } from "lodash";
// import { useState, useEffect } from "react";
import styled from "styled-components";
import { themes } from "../theme-style";
import { TbArrowBarRight, TbSeparatorVertical } from "react-icons/tb";

const StyledSingleContent = styled.div`
  box-sizing:border-box ;
  padding-bottom:25px ;
  padding-top: ${({ props }) => props.index === 0 ? '25px' : 0};
  .svg-TbArrowBarRight {
    width:16px;
    height:16px ;
    margin-right:12px ;
    color:${({ props }) => props.themeColor.border};
  }
`;

export const SingleContent = ({
  theme = 'light',
  value = '',
  index = 0
}) => {
  return <StyledSingleContent
    props={{
      index: index,
      themeColor: themes[theme] || themes,
    }}
  >
    <TbArrowBarRight className="svg-TbArrowBarRight" />
    <span>{value}</span>
  </StyledSingleContent>
}

const StyledMultipleContent = styled.div`
  display:flex ;
  align-items:center ;
  box-sizing:border-box ;
  padding-left:28px ;
  border-top: ${({ props }) => props.index === 0 ? '0px' : '1px'} solid ${({ props }) => props.themeColor.border};
  .svg-TbSeparatorVertical {
    width:16px;
    height:16px ;
    margin-right:12px ;
    color:${({ props }) => props.themeColor.border};
  }
  .mc-data {
    display:flex ;
    align-items:center ;
    box-sizing:border-box ;
    padding:20px 0 ;
    width:${({ props }) => `calc(100% / ${props.length})`};
  }
`;

export const MultipleContent = ({
  theme = 'light',
  value = [],
  index = 0
}) => {
  return <StyledMultipleContent
    props={{
      index: index,
      themeColor: themes[theme] || themes,
      length: value.length
    }}
  >
    {value.map((val, key) => <div className="mc-data" key={key}>
      <TbSeparatorVertical className="svg-TbSeparatorVertical" />
      <span>{val}</span>
    </div>)}
  </StyledMultipleContent>
}