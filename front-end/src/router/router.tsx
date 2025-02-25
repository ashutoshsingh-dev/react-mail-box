import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { Routes } from "@/constants/routes-constants";
import { AppLayout } from "@/components/layouts/app-layout";
import { PrivateRoute, PublicRoute } from "@/router/route-guard";

const HomePage = lazy(() => import("@/pages/home-page"));
const ErrorPage = lazy(() => import("@/router/error-page"));
const LoginPage = lazy(() => import("@/pages/login/login-page"));
const RegitsterPage = lazy(() => import("@/pages/register/register-page"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: Routes.REGISTER,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: Routes.LOGIN,

    element: (
      <PublicRoute>
        <RegitsterPage />
      </PublicRoute>
    ),
  },
]);
