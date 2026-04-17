"use client";

import * as React from "react";
import { Check, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const themes = [
  { name: "Default", value: "", color: "bg-foreground" },
  { name: "Blue", value: "blue", color: "bg-[#3b82f6]" },
  { name: "Orange", value: "orange", color: "bg-[#f97316]" },
  { name: "Green", value: "green", color: "bg-[#22c55e]" },
];

export function ThemeColorToggle() {
  const [activeTheme, setActiveTheme] = React.useState<string>("");

  React.useEffect(() => {
    // Sincronizar el estado local con el atributo del DOM (puesto por el servidor)
    const currentTheme = document.documentElement.getAttribute("data-color-theme") || "";
    setActiveTheme(currentTheme);
  }, []);

  const applyTheme = (themeValue: string) => {
    const root = document.documentElement;
    
    if (themeValue) {
      root.setAttribute("data-color-theme", themeValue);
      // Guardar en cookie para que el servidor lo lea (expira en 1 año)
      document.cookie = `strix-color-theme=${themeValue}; path=/; max-age=31536000`;
    } else {
      root.removeAttribute("data-color-theme");
      document.cookie = `strix-color-theme=; path=/; max-age=0`;
    }

    setActiveTheme(themeValue);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Palette className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px] rounded-xl p-2 z-[100]">
        <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
          Primary Color
        </div>
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            className="flex items-center justify-between cursor-pointer rounded-lg px-2 py-2 focus:bg-accent"
            onClick={() => applyTheme(theme.value)}
          >
            <div className="flex items-center gap-3">
              <div className={cn("h-4 w-4 rounded-full border border-border/50", theme.color)} />
              <span className="text-sm font-medium">{theme.name}</span>
            </div>
            {activeTheme === theme.value && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
