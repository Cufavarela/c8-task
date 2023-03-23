import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { throttleFunction } from "../utils/throttleFunction";

export const useBrowserSize = () => {
  const { state, actions } = useContext(GlobalContext);
  const userAgent: string = window.navigator.userAgent;

  const isMobileDevice = (): boolean => {
    const regexPatterns = [
      /(Android)(.+)(Mobile)/i,
      /BlackBerry/i,
      /iPhone|iPod/i,
      /Opera Mini/i,
      /IEMobile/i,
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/,
    ];
    return regexPatterns.some((b) => userAgent.match(b));
  };

  const handleWindowResize = useMemo(
    () =>
      throttleFunction(() => {
        actions.setBrowserHeight(window.innerHeight);
        actions.setBrowserWidth(window.innerWidth);
        if (isMobileDevice()) {
          actions.setDeviceType("Mobile");
        } else {
          actions.setDeviceType("Desktop");
        }
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
