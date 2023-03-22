import { ReactNode } from "react";

export type GlobalContextProps = {
  state: State;
  actions: Actions;
};

export type State = {
  browserHeight: number;
  browserWidth: number;
  deviceType: string;
  darkMode: boolean;
};

export type Actions = {
  setBrowserWidth: React.Dispatch<React.SetStateAction<number>>;
  setBrowserHeight: React.Dispatch<React.SetStateAction<number>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setDeviceType: React.Dispatch<React.SetStateAction<string>>;
};

export type GlobalContextProviderProps = {
  children: ReactNode;
};
