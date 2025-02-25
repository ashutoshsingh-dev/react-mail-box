import { createBrowserRouter } from "react-router";

import { Routes } from "@/constants/routes-constants";
import { AppLayout } from "@/components/layouts/app-layout";
import { PrivateRoute, PublicRoute } from "@/router/route-guard";

import HomePage from "@/pages/home-page";
import ErrorPage from "@/router/error-page";
import LoginPage from "@/pages/login/login-page";
import RegitsterPage from "@/pages/register/register-page";

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
        <RegitsterPage />
      </PublicRoute>
    ),
  },
  {
    path: Routes.LOGIN,

    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
