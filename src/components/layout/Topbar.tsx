
import { useNavigate } from "react-router-dom";
import { HiLogout, HiUser, HiMoon, HiSun } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
      <div className="text-lg font-bold text-blue-600 dark:text-yellow-400">
        NoaGuard
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-blue-300"
        >
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>

        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <HiUser />
          <span className="text-sm">{user?.email}</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-red-600 hover:text-red-800 dark:hover:text-red-400 text-sm"
        >
          <HiLogout />
          Logout
        </button>
      </div>
    </header>
  );
}
