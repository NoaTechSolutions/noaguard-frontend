import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import Dashboard from "../src/pages/Dashboard";
import PrivateRoute from "../src/routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
