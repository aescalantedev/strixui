"use client";

import * as React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  ChevronRight,
  Zap,
  PieChart,
  DollarSign,
  UserPlus,
  ShieldCheck,
  MoreHorizontal
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Estructura de navegación con submenús
const navData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "#",
    items: [
      { title: "Analytics", url: "/analytics", icon: PieChart },
      { title: "Finance", url: "/finance", icon: DollarSign },
    ],
  },
  {
    title: "Users",
    icon: Users,
    url: "#",
    items: [
      { title: "List", url: "/users", icon: Users },
      { title: "Roles", url: "/roles", icon: ShieldCheck },
      { title: "Add User", url: "/users/new", icon: UserPlus },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group/logo shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/20 transition-transform group-hover/logo:scale-105">
            {/* Logo con opacidad 100% y color vibrante siempre */}
            <Zap className="h-5 w-5 text-primary-foreground fill-primary-foreground/20 opacity-100" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground opacity-100 group-data-[collapsible=icon]:hidden">
            Strix UI
          </span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Overview
          </SidebarGroupLabel>
          <SidebarMenu className="px-2 gap-1">
            {navData.map((item) => (
              <React.Fragment key={item.title}>
                {item.items ? (
                  /* Patrón de submenús: Dropdown si está colapsado, Collapsible si no */
                  isCollapsed ? (
                    <SidebarMenuItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuButton 
                            tooltip={item.title}
                            className="h-10 rounded-lg transition-all duration-200"
                          >
                            <item.icon className="h-[18px] w-[18px] text-muted-foreground" />
                          </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="min-w-48 ml-2 rounded-xl">
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-b border-border/50 mb-1">
                            {item.title}
                          </div>
                          {item.items.map((subItem) => (
                            <DropdownMenuItem key={subItem.title} asChild>
                              <Link href={subItem.url} className="flex items-center gap-2 cursor-pointer rounded-lg">
                                <subItem.icon className="h-4 w-4 text-muted-foreground/70" />
                                <span>{subItem.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  ) : (
                    <Collapsible asChild className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            tooltip={item.title}
                            className="h-10 rounded-lg transition-all duration-200"
                          >
                            <item.icon className="h-[18px] w-[18px] text-muted-foreground" />
                            <span className="font-medium">{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="ml-4 border-l border-border/50 pl-2 mt-1 gap-1">
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={subItem.url} className="flex items-center gap-3 h-9 rounded-md hover:bg-secondary/50 transition-colors px-3">
                                    <subItem.icon className="h-4 w-4 text-muted-foreground/70" />
                                    <span className="text-sm">{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                ) : (
                  /* Ítem simple sin submenús */
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.title} className="h-10 rounded-lg">
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon className="h-[18px] w-[18px] text-muted-foreground" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  );
}
