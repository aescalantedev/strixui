"use client";

import * as React from "react";
import { ShieldCheck, ShieldAlert, Shield, ShieldQuestion, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = [
  { 
    name: "Administrator", 
    users: 3, 
    description: "Full access to all system settings and user management.",
    icon: ShieldCheck,
    color: "text-primary"
  },
  { 
    name: "Editor", 
    users: 12, 
    description: "Can manage content and basic application settings.",
    icon: Shield,
    color: "text-blue-500"
  },
  { 
    name: "Viewer", 
    users: 45, 
    description: "Read-only access to dashboards and analytics.",
    icon: ShieldQuestion,
    color: "text-muted-foreground"
  }
];

export default function RolesPage() {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            User Roles
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Define and manage access levels for your team.
          </p>
        </div>
        <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5 transition-all active:scale-95">
          <Plus className="h-4 w-4" />
          Create New Role
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.name} className="border-border/40 shadow-sm rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                 <div className={`p-2 rounded-xl bg-secondary/50 ${role.color}`}>
                    <role.icon className="h-6 w-6" />
                 </div>
                 <Badge variant="outline" className="rounded-lg text-[10px] font-black uppercase tracking-tighter">
                   {role.users} Users
                 </Badge>
              </div>
              <CardTitle className="text-lg font-black uppercase tracking-tight">{role.name}</CardTitle>
              <CardDescription className="text-xs font-medium leading-relaxed">
                {role.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
               <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5 rounded-lg text-xs font-bold transition-all">
                  Manage Permissions
                  <Plus className="h-4 w-4 opacity-50" />
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
