import { Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import React, { useState } from "react";

const DarkButton = () => {
  const [actualTheme, setActualTheme] = useState<"light" | "dark">(
    (localStorage.getItem("vite-ui-theme") as "light" | "dark") || "light"
  );
  const { setTheme } = useTheme();

  const theme = (): "light" | "dark" => {
    const newTheme = actualTheme === "light" ? "dark" : "light";
    setActualTheme(newTheme);
    return newTheme;
  };

  return (
    <div>
      <button
        onClick={() => setTheme(theme())}
        className="flex items-center gap-2 text-sm cursor-pointer"
      >
        <Moon className={`size-5 stroke-1 ${actualTheme === "dark" && "fill-white"}`} />
        Dark Mode
      </button>
    </div>
  );
};

export default DarkButton;
