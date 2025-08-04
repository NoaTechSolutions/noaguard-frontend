import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TestDashboardRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const roles = JSON.parse(localStorage.getItem("roles") || "[]");

    if (!token) {
      navigate("/login");
    } else {
      console.log("✅ Authenticated. Roles:", roles);
    }
  }, [navigate]);

  return (
    <div className="p-4 text-gray-800 dark:text-white">
      <h1 className="text-xl font-bold">Dashboard Home</h1>
      <p>Welcome to the protected area of the app!</p>
    </div>
  );
};

export default TestDashboardRoute;
