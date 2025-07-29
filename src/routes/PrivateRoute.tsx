import { Navigate } from "react-router-dom";
import { JSX } from "react";
import { isTokenValid } from "../utils/auth";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token || !isTokenValid(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
