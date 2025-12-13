import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end m-4">
      <Button
        onClick={toggleTheme}
        variant={theme === "light" ? "default" : "ghost"}
        className={theme === "dark" ? "bg-neutral-100" : "bg-neutral-900"}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </Button>
    </div>
  );
};

export default ThemeToggle;
