import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { isTokenValid, getUserFromToken, UserFromToken } from "../utils/auth";

interface AuthContextProps {
  token: string | null;
  user: UserFromToken | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserFromToken | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken && isTokenValid(storedToken)) {
      setToken(storedToken);
      const storedUser = getUserFromToken(storedToken);
      setUser(storedUser);
    } else {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    }
  }, []);

  const login = (jwt: string) => {
    if (!isTokenValid(jwt)) throw new Error("Invalid token");

    const userFromToken = getUserFromToken(jwt);
    if (!userFromToken) throw new Error("Cannot parse user from token");

    localStorage.setItem("token", jwt);
    setToken(jwt);
    setUser(userFromToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
