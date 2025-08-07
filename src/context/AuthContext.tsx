import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { UserType } from "../types/UserType";

interface AuthContextType {
  user: UserType | null;
  login: (token: string, userData: UserType) => void;
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
    const userDataString = localStorage.getItem("userData");

    if (token && userDataString) {
      try {
        const parsedUser: UserType = JSON.parse(userDataString);
        setUser(parsedUser);
      } catch (err) {
        console.error("Error parsing user data from localStorage", err);
        setUser(null);
      }
    }
  }, []);

  const login = (token: string, userData: UserType) => {
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
