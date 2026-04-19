"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Zap } from "lucide-react";
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
import { navigationGroups } from "@/config/navigation";

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
      
      <SidebarContent className="gap-0 scrollbar-none">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 mt-6 mb-2">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu className="px-2 gap-1">
              {group.items.map((item) => {
                const isGroupActive = item.items 
                  ? item.items.some(sub => sub.url === pathname)
                  : pathname === item.url;

                return (
                  <React.Fragment key={item.title}>
                    {item.items ? (
                      isCollapsed ? (
                        /* DROP-DOWN PARA SIDEBAR COLAPSADO */
                        <SidebarMenuItem>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuButton 
                                tooltip={item.title}
                                isActive={isGroupActive}
                                className={cn(
                                  "h-10 rounded-lg transition-all duration-200",
                                  isGroupActive && "bg-primary/5 text-primary font-bold"
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
                              className="min-w-56 rounded-xl border-border/50 shadow-xl bg-popover/95 backdrop-blur-md p-1 z-[100]"
                            >
                              <div className="px-3 py-2 text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.2em] border-b border-border/40 mb-1">
                                {item.title}
                              </div>
                              {item.items.map((subItem) => (
                                <DropdownMenuItem key={subItem.title} asChild>
                                  <Link 
                                    href={subItem.url} 
                                    className={cn(
                                      "flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2.5 text-xs transition-colors",
                                      pathname === subItem.url ? "bg-primary/10 text-primary font-bold" : "hover:bg-accent focus:bg-accent font-medium text-muted-foreground"
                                    )}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenMobile(false);
                                    }}
                                  >
                                    <subItem.icon className={cn(
                                      "h-4 w-4",
                                      pathname === subItem.url ? "text-primary" : "text-muted-foreground/50"
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
                                  isGroupActive && "bg-primary/5 text-primary"
                                )}
                              >
                                <item.icon className={cn(
                                  "h-[18px] w-[18px]",
                                  isGroupActive ? "text-primary" : "text-muted-foreground"
                                )} />
                                <span className="font-bold text-sm tracking-tight">{item.title}</span>
                                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground/40 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="ml-4 border-l border-border/30 pl-2 mt-1 gap-1">
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
                                              ? "bg-primary text-primary-foreground font-black shadow-sm" 
                                              : "hover:bg-secondary/50 text-muted-foreground font-medium"
                                          )}
                                        >
                                          <subItem.icon className="h-4 w-4" />
                                          <span className="text-[13px] tracking-tight">{subItem.title}</span>
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
                            isGroupActive && "bg-primary/5 text-primary font-black"
                          )}
                        >
                          <Link href={item.url} className="flex items-center gap-3 px-3">
                            <item.icon className={cn(
                              "h-[18px] w-[18px]",
                              isGroupActive ? "text-primary" : "text-muted-foreground"
                            )} />
                            <span className="font-bold text-sm tracking-tight">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}
                  </React.Fragment>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  );
}
