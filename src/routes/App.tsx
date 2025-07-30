// src/App.tsx
import LoginForm from "@/components/auth/LoginForm";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHome from "@/pages/DashboardHome";
import UsersPage from "@/pages/UsersPage";
import { Routes, Route, Navigate } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<UsersPage />} />
        {/* más rutas */}
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
