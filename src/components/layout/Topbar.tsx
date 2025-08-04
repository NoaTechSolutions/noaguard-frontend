// Topbar.tsx
import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  // Cierra dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-end items-center px-[10px] h-[60px] bg-white dark:bg-gray-900 shadow-sm">
      {/* Botón modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="p-2 mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110 bg-gray-200 dark:bg-gray-700 rounded-full"
        title="Toggle theme"
      >
        {isDark ? (
          <SunIcon className="w-5 h-5 text-yellow-400" />
        ) : (
          <MoonIcon className="w-5 h-5 text-gray-800" />
        )}
      </button>

      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md shadow hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="mr-2">{user?.firstName || "Jane"} {user?.lastName || "Doe"}</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 z-20 w-64 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-xl animate-fade-in-down"
          >
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=face&w=64&q=80"
                alt="Profile"
              />
              <div>
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {user?.firstName || "Jane"} {user?.lastName || "Doe"}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.email || "janedoe@example.com"}
                </p>
              </div>
            </div>

            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                View Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
