// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          {/* Aquí puedes agregar más subrutas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
