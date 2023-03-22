import { renderHook, act } from "@testing-library/react";
import { useBrowserSize } from "./hooks/useBrowserSize";
import useTheme from "./hooks/useTheme";

test("browser size custom hook", () => {
  const { result } = renderHook(() => useBrowserSize());

  expect(result.current.browserHeight).toBe(0);
  expect(result.current.browserHeight).toBe(0);
  expect(result.current.deviceType).toBe("monitor");
});

test("useTheme custom hook", () => {
  const { result } = renderHook(() => useTheme());

  act(() => {
    result.current.toggleTheme();
  });

  expect(result.current.darkMode).toBe(false);
});
