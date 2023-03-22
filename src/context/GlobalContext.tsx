import React, { FC, useState } from "react";
import { GlobalContextProps, GlobalContextProviderProps } from "../types/Types";

export const GlobalContext = React.createContext<GlobalContextProps>({
  state: {
    deviceType: "Desktop",
    browserWidth: 0,
    browserHeight: 0,
    darkMode: false,
  },
  actions: {
    setBrowserWidth: () => {},
    setBrowserHeight: () => {},
    setDarkMode: () => {},
    setDeviceType: () => {},
  },
});

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const storagedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(
    storagedTheme && storagedTheme === "dark" ? true : false
  );
  const [deviceType, setDeviceType] = useState("Desktop");

  const state = {
    deviceType,
    browserWidth,
    browserHeight,
    darkMode,
  };

  const actions = {
    setBrowserWidth,
    setBrowserHeight,
    setDarkMode,
    setDeviceType,
  };

  return (
    <GlobalContext.Provider value={{ state, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};
