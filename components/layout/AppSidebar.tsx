"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ChevronRight,
  Zap,
  PieChart,
  DollarSign,
  UserPlus,
  ShieldCheck,
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
import { cn } from "@/lib/utils";

const navData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
    items: [
      { title: "Overview", url: "/", icon: LayoutDashboard },
      { title: "Analytics", url: "/analytics", icon: PieChart },
      { title: "Finance", url: "/finance", icon: DollarSign },
    ],
  },
  {
    title: "Users",
    icon: Users,
    url: "/users",
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
  const pathname = usePathname();
  const { state, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group/logo shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/20 transition-transform group-hover/logo:scale-105">
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
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu className="px-2 gap-1">
            {navData.map((item) => {
              const isGroupActive = item.items 
                ? item.items.some(sub => sub.url === pathname)
                : pathname === item.url;

              return (
                <React.Fragment key={item.title}>
                  {item.items ? (
                    isCollapsed ? (
                      /* DROP-DOWN PARA SIDEBAR COLAPSADO - BLINDADO */
                      <SidebarMenuItem>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuButton 
                              tooltip={item.title}
                              isActive={isGroupActive}
                              className={cn(
                                "h-10 rounded-lg transition-all duration-200",
                                isGroupActive && "bg-secondary/80 text-primary font-semibold shadow-sm"
                              )}
                            >
                              <item.icon className={cn(
                                "h-[18px] w-[18px]",
                                isGroupActive ? "text-primary" : "text-muted-foreground"
                              )} />
                            </SidebarMenuButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent 
                            side="right" 
                            align="start" 
                            sideOffset={20} 
                            className="min-w-48 rounded-xl border-border/50 shadow-xl bg-popover/95 backdrop-blur-md p-1 z-[100]"
                          >
                            <div className="px-3 py-2 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em] border-b border-border/40 mb-1">
                              {item.title}
                            </div>
                            {item.items.map((subItem) => (
                              <DropdownMenuItem key={subItem.title} asChild>
                                <Link 
                                  href={subItem.url} 
                                  className={cn(
                                    "flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors",
                                    pathname === subItem.url ? "bg-primary/10 text-primary font-semibold" : "hover:bg-accent focus:bg-accent"
                                  )}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenMobile(false);
                                  }}
                                >
                                  <subItem.icon className={cn(
                                    "h-4 w-4",
                                    pathname === subItem.url ? "text-primary" : "text-muted-foreground/70"
                                  )} />
                                  <span>{subItem.title}</span>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </SidebarMenuItem>
                    ) : (
                      /* ACORDEÓN PARA SIDEBAR EXPANDIDO */
                      <Collapsible 
                        asChild 
                        defaultOpen={isGroupActive}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton 
                              tooltip={item.title}
                              isActive={isGroupActive}
                              className={cn(
                                "h-10 rounded-lg transition-all duration-200",
                                isGroupActive && "bg-secondary/40 text-primary"
                              )}
                            >
                              <item.icon className={cn(
                                "h-[18px] w-[18px]",
                                isGroupActive ? "text-primary" : "text-muted-foreground"
                              )} />
                              <span className="font-semibold">{item.title}</span>
                              <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4 border-l border-border/50 pl-2 mt-1 gap-1">
                              {item.items.map((subItem) => {
                                const isSubActive = pathname === subItem.url;
                                return (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton asChild isActive={isSubActive}>
                                      <Link 
                                        href={subItem.url} 
                                        className={cn(
                                          "flex items-center gap-3 h-9 rounded-md transition-all px-3",
                                          isSubActive 
                                            ? "bg-primary/5 text-primary font-bold shadow-[inset_0_0_0_1px_rgba(var(--primary),0.1)]" 
                                            : "hover:bg-secondary/50 text-muted-foreground"
                                        )}
                                      >
                                        <subItem.icon className={cn(
                                          "h-4 w-4",
                                          isSubActive ? "text-primary" : "text-muted-foreground/70"
                                        )} />
                                        <span className="text-sm font-medium">{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                );
                              })}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  ) : (
                    /* ÍTEM SIMPLE SIN SUBMENÚS */
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title} 
                        isActive={isGroupActive}
                        className={cn(
                          "h-10 rounded-lg transition-all",
                          isGroupActive && "bg-secondary/40 text-primary font-bold"
                        )}
                      >
                        <Link href={item.url} className="flex items-center gap-3 px-3">
                          <item.icon className={cn(
                            "h-[18px] w-[18px]",
                            isGroupActive ? "text-primary" : "text-muted-foreground"
                          )} />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </React.Fragment>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  );
}
