import { createContext, useContext, useReducer } from "react";

import { getInitialTheme } from "../utils/helpers";

const ThemeContext = createContext();

const initialTheme = getInitialTheme();

const initialState = {
  theme: initialTheme,
};

function reducer(state, action) {
  switch (action.type) {
    case "theme/toggle": {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme: newTheme };
    }
  }
}

const ThemeProvider = ({ children }) => {
  const [{ theme }, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "theme/toggle" });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext can not be used outside ThemeProvider");
  return context;
};

export { useTheme, ThemeProvider };
