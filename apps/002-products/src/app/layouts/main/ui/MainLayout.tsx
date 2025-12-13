import { BreadcrumbsWidget } from "@/widgets/breadcrumbs";
import { HeaderWidget } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <HeaderWidget />

      <BreadcrumbsWidget />

      <main className="container mx-auto">
        <Outlet></Outlet>
      </main>
    </>
  );
}