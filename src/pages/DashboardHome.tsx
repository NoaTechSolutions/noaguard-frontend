import { useAuth } from "@/context/AuthContext";
import { Button } from "flowbite-react";

export default function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        Welcome to NoaGuard, {user?.email || "User"}!
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        This is your personalized dashboard. Use the navigation menu to explore features based on your role.
      </p>

      {/* 🔵 Prueba de Flowbite */}
      <div className="mb-6">
        <Button color="primary" onClick={() => alert("Flowbite works!")}>
          🚀 Test Flowbite Button
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg shadow hover:bg-blue-200 dark:hover:bg-blue-700 transition">
          <p className="text-blue-800 dark:text-blue-100 font-semibold">Role</p>
          <p className="text-sm">{user?.roles?.join(", ") || "No roles assigned"}</p>
        </div>

        <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow hover:bg-green-200 dark:hover:bg-green-700 transition">
          <p className="text-green-800 dark:text-green-100 font-semibold">System Status</p>
          <p className="text-sm">All systems operational</p>
        </div>

        <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg shadow hover:bg-yellow-200 dark:hover:bg-yellow-700 transition">
          <p className="text-yellow-800 dark:text-yellow-100 font-semibold">Tip of the day</p>
          <p className="text-sm">You can manage users based on your assigned role.</p>
        </div>
      </div>
    </div>
  );
}
