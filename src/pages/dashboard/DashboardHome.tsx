import { useAuth } from "../../context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to your dashboard, {user?.email || "User"}!
      </h1>
      <p className="text-gray-600">
        This is your starting point. Use the menu to navigate through your options.
      </p>
    </div>
  );
}
