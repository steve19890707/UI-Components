import { noop } from "lodash";
import { Button, Input, Tab, Switch, DropInput, Tags } from "adam-ui-beta";

export const GeneralButton = ({
  theme = '',
  onClick = noop
}) => {
  return <Button theme={theme} onClick={() => onClick()} />
};

export const GeneralDropInput = ({
  theme = '',
  onClick = noop
}) => {
  return <DropInput
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
    onClick={(e) => onClick(e)}
  />
};

export const GeneralInput = ({
  theme = '',
  onChange = noop
}) => {
  return <Input
    theme={theme}
    datalist={["@fresco.tech", "@google.com"]}
    onChange={(e) => onChange(e)}
  />
}

export const GeneralSwitch = ({
  theme = '',
  status = false,
  onChange = noop
}) => {
  return <Switch
    theme={theme}
    status={status}
    onChange={() => onChange()}
  />
}

export const GeneralTab = ({
  theme = '',
  onClick = noop
}) => {
  return <Tab
    theme={theme}
    defaultId={1}
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
    onClick={(e) => onClick(e)}
  />
}

export const GeneralTags = ({
  theme = "",
  type = "",
  value = "",
  onClick = noop
}) => {
  return <Tags
    theme={theme}
    type={type}
    value={value}
    onClick={(e) => onClick(e)}
  />
}