import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Sidebar lateral */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Barra superior */}
        <Topbar />

        {/* Contenido dinámico */}
        <main className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-900 transition-colors">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
