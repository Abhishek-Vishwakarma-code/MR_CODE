"use client";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="p-2.5 rounded-xl bg-(--bg-accent) text-(--brand-orange) hover:scale-105 transition-transform"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
    </button>
  );
}