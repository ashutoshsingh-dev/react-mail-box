import { FC } from "react";
import { Navigate } from "react-router";

type RouteProps = {
  children: React.ReactNode;
};

const user = false;

export const PrivateRoute: FC<RouteProps> = ({ children }) => {
  return user ? children : <Navigate to="/login" replace />;
};

export const PublicRoute: FC<RouteProps> = ({ children }) => {
  return user ? <Navigate to="/" /> : children;
};
