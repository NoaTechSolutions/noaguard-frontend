import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border rounded">
          <thead className="bg-primary text-white dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.active
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
