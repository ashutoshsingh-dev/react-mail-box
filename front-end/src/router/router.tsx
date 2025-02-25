import { createBrowserRouter } from "react-router";

import { Routes } from "@/constants/routes-constants";
import { AppLayout } from "@/components/layouts/app-layout";
import { PrivateRoute, PublicRoute } from "@/router/route-guard";

import ErrorPage from "@/router/error-page";
import LoginPage from "@/pages/login/login-page";
import RegitsterPage from "@/pages/register/register-page";
import MailApp from "@/pages/mail-app/pages/mail-home-page";
import { MailDisplayMessage } from "@/pages/mail-app/components/mail-display-message";

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
        path: Routes.HOME,
        element: <MailApp />,
        children: [
          {
            path: "/:mailId",
            element: <MailDisplayMessage />,
          },
        ],
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
