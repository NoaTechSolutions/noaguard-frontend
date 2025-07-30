import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api", // cambia si tu API usa otro puerto/ruta
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
