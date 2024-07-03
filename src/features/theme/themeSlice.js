import { createSlice } from "@reduxjs/toolkit";
import getInitialTheme from "../../utilities/helpers";

// getting inital theme based on users browser preferred theme
const initialTheme = getInitialTheme();

const initialState = {
  theme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
     
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
