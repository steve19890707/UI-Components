import { createSlice } from '@reduxjs/toolkit'

const props = createSlice({
  name: "props",
  initialState: {
    theme: 'light',
    devEnv: process.env.NODE_ENV === "development",
    asideKeyname: '',
  },
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload;
    },
    setAsideKeyname: (state, actions) => {
      state.asideKeyname = actions.payload;
    },
  }
});

export default props.reducer;
export const { setTheme, setAsideKeyname } = props.actions