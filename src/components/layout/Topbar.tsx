import { useEffect, useState } from "react";

export default function Topbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Cargar el tema desde localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="rounded-md border border-gray-300 dark:border-gray-700 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <img
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
          alt="avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
