"use client";
import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProfileCard from "./components/ProfileCard";

export default function BioPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProfileCard />
    </div>
  );
}
