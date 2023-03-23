import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useTheme = () => {
  const { state, actions } = useContext(GlobalContext);

  const toggleTheme = () => {
    actions.setDarkMode(!state.darkMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", state.darkMode ? "dark" : "light");
  }, [state.darkMode]);

  return { darkMode: state.darkMode, toggleTheme };
};

export default useTheme;
