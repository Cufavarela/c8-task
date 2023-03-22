import { ToggleBtn } from "./components/ToggleBtn";
import { useBrowserSize } from "./hooks/useBrowserSize";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { browserHeight, browserWidth, deviceType } = useBrowserSize();

  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : "light"} w-screen h-screen `}>
      <div
        className={`w-screen h-screen flex justify-center content-center flex-wrap bg-gradient-to-r from-purple-600 to-blue-600 dark:from-gray-700 dark:to-blue-900`}
      >
        <div className="h-fit bg-white dark:bg-black border rounded border-4 border-orange-600 dark:border-orange-100 p-8">
          <h2 className="text-xl text-black dark:text-white font-bold">
            Width: {browserWidth}
          </h2>

          <h2 className="text-xl text-black dark:text-white font-bold">
            Height: {browserHeight}
          </h2>

          <h2 className="text-xl text-black dark:text-white font-bold">
            Device: {deviceType} {deviceType === "monitor" ? "💻" : "📱"}
          </h2>

          <div className="flex justify-center content-center mt-8">
            <ToggleBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
