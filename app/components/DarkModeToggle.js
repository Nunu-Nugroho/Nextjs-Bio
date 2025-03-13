"use client";

import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-4 right-4 bg-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-400 transition-all"
    >
      {darkMode ? <FaSun className="text-grey-400" size={20} /> : <FaMoon className="text-gray-800" size={20} />}
    </button>
  );
}
