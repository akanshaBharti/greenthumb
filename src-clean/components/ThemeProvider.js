function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeProviderContext = /*#__PURE__*/createContext({
  theme: "system",
  setTheme: () => null
});
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "greenthumb-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: theme => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    }
  };
  return /*#__PURE__*/React.createElement(ThemeProviderContext.Provider, _extends({}, props, {
    value: value
  }), children);
}
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};