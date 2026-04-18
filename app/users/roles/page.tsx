"use client";

import * as React from "react";
import { 
  ShieldCheck, 
  Shield, 
  Eye, 
  Plus, 
  MoreHorizontal,
  Users,
  Lock,
  ChevronRight
} from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const roleCards = [
  {
    name: "Administrator",
    users: 3,
    description: "Full access to all system settings, billing, and user management. Can perform destructive actions.",
    icon: ShieldCheck,
    colorClass: "bg-primary/10 text-primary",
    borderColor: "hover:border-primary/50"
  },
  {
    name: "Editor",
    users: 12,
    description: "Can manage content, view analytics, and edit workspace items but cannot change system settings.",
    icon: Shield,
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderColor: "hover:border-blue-500/50"
  },
  {
    name: "Viewer",
    users: 45,
    description: "Read-only access to dashboards and reports. Perfect for clients or external stakeholders.",
    icon: Eye,
    colorClass: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
    borderColor: "hover:border-slate-500/50"
  }
];

export default function RolesPage() {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* SECTION A: PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            User Roles
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Define and manage access levels for your team.
          </p>
        </div>
        
        <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5 transition-all active:scale-95 shrink-0">
          <Plus className="h-4 w-4" />
          Create New Role
        </Button>
      </div>

      {/* SECTION B: ROLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roleCards.map((role) => (
          <Card 
            key={role.name} 
            className={cn(
              "group border-border/40 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm",
              role.borderColor,
              "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                 <div className={cn("p-2.5 rounded-xl transition-colors", role.colorClass)}>
                    <role.icon className="h-6 w-6" />
                 </div>
                 <Badge variant="outline" className="rounded-lg text-[10px] font-black uppercase tracking-tighter border-border/50 px-2 py-0.5">
                   {role.users} Users
                 </Badge>
              </div>
              <CardTitle className="text-lg font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                {role.name}
              </CardTitle>
              <CardDescription className="text-xs font-medium leading-relaxed min-h-[40px] line-clamp-2">
                {role.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0">
               <div className="px-6 py-4 border-t border-border/30 flex items-center justify-between group-hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-2">
                     <Lock className="h-3 w-3 text-muted-foreground/50" />
                     <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Manage Permissions</span>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                     <Plus className="h-3.5 w-3.5 text-primary" />
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
        
        {/* ADD ROLE PLACEHOLDER */}
        <div className="border-2 border-dashed border-border/40 rounded-2xl flex flex-col items-center justify-center p-8 gap-4 group hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer min-h-[220px]">
           <div className="h-12 w-12 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
           </div>
           <div className="text-center space-y-1">
              <p className="text-sm font-black uppercase tracking-tight">Custom Role</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Build your own access level</p>
           </div>
        </div>
      </div>

      {/* SECTION C: ROLE INSIGHTS (EXTRA TOUCH) */}
      <div className="mt-4 p-6 rounded-2xl bg-secondary/10 border border-border/30 flex flex-col md:flex-row md:items-center gap-6">
         <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-6 w-6 text-primary" />
         </div>
         <div className="flex-1 space-y-1">
            <h4 className="text-sm font-black uppercase tracking-tight">Security Hardening active</h4>
            <p className="text-xs text-muted-foreground font-medium">Your current role distribution follows industry best practices. We recommend keeping the number of Administrators below 5 for security reasons.</p>
         </div>
         <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5 rounded-lg px-4 gap-2">
            Security Audit
            <ChevronRight className="h-3 w-3" />
         </Button>
      </div>
    </div>
  );
}
