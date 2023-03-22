import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { throttleFunction } from "../utils/throttleFunction";

export const useBrowserSize = () => {
  const { state, actions } = useContext(GlobalContext);

  const setDeviceType = (browserWidth: number) => {
    if (browserWidth > 768) {
      actions.setDeviceType("monitor");
    } else {
      actions.setDeviceType("mobile");
    }
  };

  const handleWindowResize = useMemo(
    () =>
      throttleFunction(() => {
        actions.setBrowserHeight(window.innerHeight);
        actions.setBrowserWidth(window.innerWidth);
        setDeviceType(window.innerWidth);
      }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { ...state };
};
