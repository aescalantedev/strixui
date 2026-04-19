"use client";

import * as React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppTopbar } from "@/components/layout/AppTopbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Lógica de detección de contexto:
  // Definimos qué rutas NO deben mostrar Sidebar ni Topbar
  const isPublicPage = 
    pathname.startsWith("/auth") ||
    pathname.startsWith("/error");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        fontSans.variable,
        "font-sans antialiased selection:bg-primary/10 selection:text-primary min-h-screen bg-background"
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isPublicPage ? (
            /* CONTEXTO PÚBLICO (Auth/Error): Centrado, sin navegación */
            <main className="min-h-screen w-full flex items-center justify-center bg-muted/30">
              {children}
            </main>
          ) : (
            /* CONTEXTO DASHBOARD: Con Sidebar y Topbar */
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <SidebarInset className="flex flex-col bg-secondary/10 dark:bg-secondary/5">
                  <AppTopbar />
                  <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                    {children}
                  </main>
                  <footer className="h-12 border-t border-border/40 flex items-center justify-center text-[10px] text-muted-foreground uppercase tracking-widest">
                    © 2026 STRIX UI — Premium Digital Craft
                  </footer>
                </SidebarInset>
              </div>
            </SidebarProvider>
          )}
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
