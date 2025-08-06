import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import PrivateRoute from "./routes/PrivateRoute";
import DaycareInactivePage from "./pages/DaycareInactivePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      />
      <Route path="/daycare-inactive" element={<DaycareInactivePage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
