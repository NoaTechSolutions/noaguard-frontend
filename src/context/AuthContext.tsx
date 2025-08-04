// ✅ Archivo actualizado: context/AuthContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";
import { UserType } from "../types/UserType";

interface AuthContextType {
  user: UserType | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUser({
          email: decoded.sub,
          roles: decoded.roles || [],
          firstName: decoded.firstName || "John",
          lastName: decoded.lastName || "Doe",
        });
      } catch (err) {
        console.error("Invalid token", err);
        setUser(null);
      }
    }
  }, []);

  const login = (token: string) => {
    try {
      const decoded: any = jwtDecode(token);
      setUser({
        email: decoded.sub,
        roles: decoded.roles || [],
        firstName: decoded.firstName || "John",
        lastName: decoded.lastName || "Doe",
      });
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Invalid token on login", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
