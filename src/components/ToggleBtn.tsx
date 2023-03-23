import useTheme from "../hooks/useTheme";

export const ToggleBtn = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        onChange={toggleTheme}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={darkMode}
      />
      <div className=" w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className=" ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {!darkMode ? "🌑" : "🌞"}
      </span>
    </label>
  );
};
