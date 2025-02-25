import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/lib/token-handler";
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  accessToken: string;
}

interface AuthContextState {
  user: User | null;
  setCredentials: (user: User) => void;
  removeCredentials: () => void;
}

const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const setCredentials = (user: User) => {
    setUser(user);
    setAccessToken(user.accessToken);
  };

  const removeCredentials = () => {
    setUser(null);
    removeAccessToken();
  };

  useEffect(() => {
    const storedUser = getAccessToken();

    if (storedUser) {
      setCredentials({ accessToken: storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setCredentials, removeCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
