import { noop } from "lodash";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { themes } from "../theme-style";
// import { randomMakeId } from "../tools";

const StyledTags = styled.div``;

export const Tags = ({
  theme = "light",
  type = "a",
  value = "tag",
  selected = false,
  onClick = noop,
}) => {
  const [selected, setSelected] = useState(selected);
  return (
    <StyledTags
      props={{
        themeColor: themes[theme] || themes,
      }}
    >
      <div>{value}</div>
    </StyledTags>
  );
};
