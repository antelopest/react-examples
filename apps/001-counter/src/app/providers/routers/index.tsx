import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { MainLayout } from "@/app/layouts/main";

import { CounterPage } from "@pages/counter";
import { UserPage } from "@/pages/user";
import { TimerPage } from "@/pages/timer";
import { WindowPage } from "@/pages/window";
import { TogglePage } from "@/pages/toggle";

const routes: RouteObject[] = [
  {
    path: "/counter",
    element:
      (<MainLayout>
        <CounterPage />
      </MainLayout>)
  },
  {
    path: "/timer",
    element:
      (<MainLayout>
        <TimerPage />
      </MainLayout>)
  },
  {
    path: "/user",
    element:
      (<MainLayout>
        <UserPage />
      </MainLayout>)
  },
  {
    path: "/window",
    element:
      (<MainLayout>
        <WindowPage />
      </MainLayout>)
  },
  {
    path: "/toggle",
    element:
      (<MainLayout>
        <TogglePage />
      </MainLayout>)
  },
  {
    path: "/",
    element:
      (<MainLayout>
        <h3>Main</h3>
      </MainLayout>)
  }
];

export const router = createBrowserRouter(routes); 