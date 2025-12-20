import type { ReactNode } from "react";
import { Providers } from "./providers";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </div>
    </Providers>
  );
}
