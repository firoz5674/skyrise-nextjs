"use client";
import { LuMoon, LuSun } from "react-icons/lu"
import { useTheme } from "../../context/ThemeContext"
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === "dark"
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-surface/60 text-ink transition-colors duration-300 hover:border-brand"
    >
      <LuSun
        className={`absolute size-[18px] transition-all duration-500 ${
          dark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <LuMoon
        className={`absolute size-[18px] transition-all duration-500 ${
          dark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  )
}
