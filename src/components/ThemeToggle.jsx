import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  // Read theme on first load
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Sync Tailwind dark mode with state
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-3 center-3 sm:top-5 sm:right-5 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 dark:text-blue-300" />
      )}
    </button>
  );
};
