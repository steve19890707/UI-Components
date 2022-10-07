// import { noop } from "lodash";
import { List } from "adam-ui-beta";

export const LayoutList = ({
  theme = '',
  dataType = '',
  header = '',
  data = []
}) => {
  return <List
    theme={theme}
    header={header}
    dataType={dataType}
    data={data}
  />
}