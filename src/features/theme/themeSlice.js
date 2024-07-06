// src/store/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getInitialTheme } from "../../utilities/helpers";

const initialTheme = getInitialTheme();

const initialState = {
  theme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
