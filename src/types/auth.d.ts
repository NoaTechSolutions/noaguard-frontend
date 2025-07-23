export interface LoginResponse {
  token: string;
  // Puedes agregar más campos si tu backend los devuelve, por ejemplo:
  // userId: number;
  // email: string;
  // roles: string[];
}

export interface RegisterResponse {
  message: string;
  // Si tu backend devuelve algo más, como el ID del nuevo usuario, puedes agregarlo:
  // userId: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}