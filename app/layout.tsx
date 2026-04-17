import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppTopbar } from "@/components/layout/AppTopbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strix UI - Premium Dashboard Template",
  description: "Next.js 16 + Tailwind v4 + shadcn/ui Dashboard Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-primary/10 selection:text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background">
              {/* Sidebar persistente */}
              <AppSidebar />
              
              {/* Contenedor principal - AHORA 100% FLUIDO */}
              <SidebarInset className="flex flex-col bg-secondary/10 dark:bg-secondary/5">
                {/* Barra superior */}
                <AppTopbar />
                
                {/* Área de Contenido - FLUIDA CON PADDING GENEROSO */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                   {children}
                </main>
                
                {/* Footer opcional / Copyright */}
                <footer className="h-12 border-t border-border/40 flex items-center justify-center text-[10px] text-muted-foreground uppercase tracking-widest">
                  © 2026 STRIX UI — Premium Digital Craft
                </footer>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
