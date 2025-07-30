import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

interface LoginResponse {
  token: string;
}

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );

      const { token } = response.data;
      login(token);
      navigate("/dashboard");
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      if (import.meta.env.DEV) console.error("Login error:", message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Login to NoaGuard
      </h2>

      {error && (
        <div className="mb-4 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white py-2 rounded-lg hover:bg-primary-dark disabled:opacity-50 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
