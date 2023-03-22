import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useTheme = () => {
  const { state, actions } = useContext(GlobalContext);

  const toggleTheme = () => {
    actions.setDarkMode(!state.darkMode);
  };

  return { toggleTheme };
};

export default useTheme;
