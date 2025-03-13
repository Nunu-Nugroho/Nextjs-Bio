"use client";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-3 rounded-full shadow-lg transition-all bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {darkMode ? <FaSun className="text-gray-400" size={15} /> : <FaMoon className="text-gray-800 dark:text-white" size={15} />}
    </button>
  );
}
