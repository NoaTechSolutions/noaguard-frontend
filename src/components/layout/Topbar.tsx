import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow p-4 flex justify-end items-center">
      <span className="text-gray-700 font-medium">
        Welcome, {user?.email || "User"}!
      </span>
    </header>
  );
}
