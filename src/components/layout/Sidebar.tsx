// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#" className="mx-auto">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="Logo"
        />
      </a>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive
                  ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5M19 11V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m14 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
              />
            </svg>
            <span className="mx-4 font-medium">Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 rounded-lg transition-colors duration-300 ${
                isActive
                  ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"
              />
            </svg>
            <span className="mx-4 font-medium">Users</span>
          </NavLink>

          {/* Agrega más ítems aquí según rutas */}
        </nav>
      </div>
    </aside>
  );
}
