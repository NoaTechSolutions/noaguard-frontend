import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const role = user?.roles?.[0] || "";

  const menuItemsByRole: Record<string, { path: string; label: string }[]> = {
    SUPER_ADMIN: [
      { path: "/dashboard/users", label: "Users" },
      { path: "/dashboard/daycares", label: "Daycares" },
    ],
    DAYCARE_ADMIN: [
      { path: "/dashboard/students", label: "Students" },
      { path: "/dashboard/teachers", label: "Teachers" },
    ],
    TEACHER: [
      { path: "/dashboard/students", label: "My Students" },
    ],
    PARENT: [
      { path: "/dashboard/my-children", label: "My Children" },
    ],
  };

  const items = menuItemsByRole[role] || [];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">NoaGuard</h2>
      <nav className="flex flex-col gap-3">
        {items.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="hover:bg-gray-700 rounded px-3 py-2"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
