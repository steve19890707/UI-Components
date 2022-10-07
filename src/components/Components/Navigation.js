import { noop } from "lodash";
import { DragDrop, DatePicker } from "adam-ui-beta";

export const NavigationDragDrop = ({
  theme = '',
  onChange = noop
}) => {
  return <DragDrop
    theme={theme}
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
    onChange={(e) => onChange(e)}
  />
};

export const NavigationDatePicker = ({
  theme = '',
  onClick = noop
}) => {
  return <DatePicker
    theme={theme}
    onClick={(e) => onClick(e)}
  />
};