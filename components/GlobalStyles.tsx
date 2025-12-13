"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

export default function GlobalStyles() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return null;
}
