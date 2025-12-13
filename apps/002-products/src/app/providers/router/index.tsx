import { MainLayout } from "@/app/layouts/main";
import { useProductStore } from "@/entities/product";
import { HomePage } from "@/pages/home";
import { ProductPage } from "@/pages/product";
import { ProductsPage } from "@/pages/products";
import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    handle: { crumb: "Home" },
    element: (<><MainLayout></MainLayout></>),
    children: [
      {
        index: true,
        element: (<><HomePage /></>)
      },
      {
        path: "/products",
        handle: { crumb: "Products" },
        children: [
          {
            index: true,
            element: (<><ProductsPage /></>)
          },
          {
            path: ":id",
            handle: {
              crumb: (params: { id: string; }) => {
                const store = useProductStore.getState();
                return store.getById(params.id)?.title ?? params.id;
              }
            },
            element: (<><ProductPage /></>)
          }
        ]
      }]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
];

export const router = createBrowserRouter(routes);