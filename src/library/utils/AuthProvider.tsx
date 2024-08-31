// src/context/AuthContext.js
import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (v: User | null) => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = () => setIsAuthenticated((v) => !v);
  const logout = () => setIsAuthenticated((v) => !v);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
