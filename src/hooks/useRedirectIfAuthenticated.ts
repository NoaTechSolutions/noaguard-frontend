import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectIfAuthenticated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Opcional: podrías también verificar el rol y redirigir a su dashboard correspondiente
      navigate("/dashboard");
    }
  }, [navigate]);
};

export default useRedirectIfAuthenticated;