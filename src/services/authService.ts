import axios from "axios";
import { type LoginRequest, type LoginResponse, type RegisterRequest, type RegisterResponse } from "../types/auth";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (userData: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>(`${API_URL}/register`, userData);
  return response.data;
};
