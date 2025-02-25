import { useAuth } from "@/context/auth-context";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
};
