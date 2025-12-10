import { createBrowserRouter, Navigate, redirect } from "react-router-dom";

import { ProfilePage } from "@pages/profile";
import { SignupPage } from "@pages/signup";
import { LoginPage } from "@pages/login";

import { PublicLayout } from "@/app/layouts/public";

const onlyGuests = () => {
  if (true) return true;
}

const onlyUser = () => {
  if (true) throw redirect("/login");
}

export const router = createBrowserRouter(
  [
    {
      path: "/signup",
      loader: onlyGuests,
      element: (
        <PublicLayout>
          <SignupPage />
        </PublicLayout>
      )
    },
    {
      path: "/login",
      loader: onlyGuests,
      element: <LoginPage />
    },
    {
      path: "/profile",
      loader: onlyUser,
      element: <ProfilePage />,
    },

    {
      path: "*",
      element: <Navigate to="/login" replace />
    }
  ]
);