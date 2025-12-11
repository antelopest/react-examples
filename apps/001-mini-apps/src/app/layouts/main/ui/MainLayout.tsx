import type { ReactNode } from "react";

import { HeaderWidget } from "@/widgets/header";
import { FooterWidget } from "@/widgets/footer";

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderWidget />

      <main>
        {children}
      </main>

      <FooterWidget />
    </>
  );
}