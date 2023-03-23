import { ToggleBtn } from "./components/ToggleBtn";
import { useBrowserSize } from "./hooks/useBrowserSize";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { browserHeight, browserWidth, deviceType } = useBrowserSize();

  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : "light"} w-screen h-screen `}>
      <div
        className={`w-screen h-screen flex justify-center content-center flex-wrap bg-gradient-to-r from-purple-600 to-blue-600 dark:from-gray-700 dark:to-blue-900 ease-in-out`}
      >
        <div className="h-fit text-center bg-white dark:bg-black drop-shadow-2xl border rounded-lg border-4 border-black dark:border-white p-8">
          <h2 className="text-5xl text-black dark:text-white font-bold">
            {browserWidth} X {browserHeight}
          </h2>
          <h2 className="text-3xl text-black dark:text-white font-bold my-2">
            {deviceType} {deviceType === "Desktop" ? "💻" : "📱"}
          </h2>
          <div className="flex justify-center content-center mt-8">
            <ToggleBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
