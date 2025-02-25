import { Navigate } from "react-router";

const user = true;

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return user ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return user ? <Navigate to="/" /> : children;
};
