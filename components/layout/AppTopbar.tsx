"use client";

import { Search, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppTopbar() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-6 lg:px-10">
        {/* Toggle del Sidebar */}
        <SidebarTrigger className="hover:bg-secondary/80 rounded-lg" />
        
        {/* Separador visual para desktop */}
        <div className="h-6 w-[1px] bg-border/50 hidden md:block" />

        {/* Buscador Global con estilo Premium */}
        <div className="flex-1 max-w-md relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search resources..." 
            className="pl-10 h-9 bg-secondary/30 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary/30 transition-all"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Botón Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Botón Notificaciones */}
          <Button variant="ghost" size="icon" className="rounded-full relative">
             <Bell className="h-5 w-5" />
             <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background" />
          </Button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0 overflow-hidden ring-offset-background transition-all hover:ring-2 hover:ring-primary/20">
                <Avatar className="h-9 w-9 border border-border/50">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">SX</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 rounded-xl" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold leading-none text-foreground">Strix User</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@strix-ui.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer rounded-lg">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg">Billing</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-red-500 focus:text-red-500 focus:bg-red-50/10">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
