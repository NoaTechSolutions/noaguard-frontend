import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon, ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type TopbarProps = {
  onMenuClick?: () => void; // ← para abrir el sidebar en móvil
};

const Topbar = ({ onMenuClick }: TopbarProps) => {
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
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
  };

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
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="container flex items-center justify-between px-6 py-2">
        {/* Izquierda: Hamburguesa (solo móvil) + Breadcrumbs (ocultos en móvil) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center overflow-x-auto whitespace-nowrap">
            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">Home</a>
            <span className="mx-3 text-gray-500 dark:text-gray-300">/</span>
            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">Account</a>
            <span className="mx-3 text-gray-500 dark:text-gray-300">/</span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Settings</a>
          </div>
        </div>

        {/* Derecha: Toggle tema + Dropdown usuario */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 transition-transform duration-300 ease-in-out transform hover:scale-110 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg"
            title="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {/* En móvil mostramos solo avatar + chevron, en desktop también el nombre */}
              <img
                src="/assets/cuenta.png"
                alt="Avatar"
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="hidden sm:inline">
                {user?.firstName} {user?.lastName}
              </span>
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-20 w-64 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-2xl animate-fade-in-down">
                <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                  <img
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                    src="/assets/cuenta.png"
                    alt="Profile"
                  />
                  <div>
                    <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.email}
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
      </div>
    </div>
  );
};

export default Topbar;
