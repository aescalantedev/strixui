"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Bell, 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  Mail,
  Zap,
  ShieldCheck,
  PieChart,
  DollarSign,
  LayoutDashboard,
  Settings,
  MoreVertical,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function BaseUIPage() {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
          Base UI Components
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Core interface elements used across the application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* BUTTONS EXHIBITION */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Buttons</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Interactive triggers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/20 p-8 rounded-xl border border-dashed border-border/50 flex flex-wrap gap-4 items-center justify-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button size="icon" className="rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Login with Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* BADGES EXHIBITION */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Badges</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Status indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/20 p-8 rounded-xl border border-dashed border-border/50 flex flex-wrap gap-4 items-center justify-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-none">Success</Badge>
              <Badge className="bg-orange-500/10 text-orange-600 border-none">Warning</Badge>
            </div>
          </CardContent>
        </Card>

        {/* ALERTS EXHIBITION */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Alerts</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Contextual feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/20 p-8 rounded-xl border border-dashed border-border/50 space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>System Update</AlertTitle>
                <AlertDescription>
                  A new version of the dashboard is available. Please refresh.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Critical Error</AlertTitle>
                <AlertDescription>
                  Your subscription has expired. Please update your billing info.
                </AlertDescription>
              </Alert>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex gap-3">
                 <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                 <div>
                    <h5 className="text-xs font-black uppercase text-emerald-600 tracking-tight">Deployment Success</h5>
                    <p className="text-[11px] text-emerald-600/70 font-medium leading-relaxed">Your application has been deployed to production successfully.</p>
                 </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AVATARS EXHIBITION */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Avatars</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">User identification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/20 p-8 rounded-xl border border-dashed border-border/50 flex flex-wrap gap-8 items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16 border-4 border-background shadow-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SX</AvatarFallback>
                </Avatar>
                <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-12 w-12 border-2 border-border/50">
                  <AvatarImage src="https://github.com/nutlope.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-black">SX</AvatarFallback>
                </Avatar>
                <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Fallback</span>
              </div>
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                    <Avatar key={i} className="h-10 w-10 border-2 border-background ring-2 ring-primary/5 shadow-md">
                       <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                       <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                 ))}
                 <div className="h-10 w-10 rounded-full bg-secondary border-2 border-background ring-2 ring-primary/5 flex items-center justify-center text-[10px] font-bold text-muted-foreground z-10 shadow-sm">+99</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EXTRA: ICON GALLERY PREVIEW */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden md:col-span-2">
           <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg font-black uppercase tracking-tight">Icon Palette Preview</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Curated Lucide React icons</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild className="rounded-xl h-8 px-4 text-[10px] font-black uppercase tracking-widest border-border/50">
                <Link href="/components/icons">View All Icons</Link>
              </Button>
           </CardHeader>
           <CardContent>
              <div className="flex flex-wrap gap-3 bg-secondary/10 p-6 rounded-xl border border-border/30 justify-center sm:justify-start">
                 {[Zap, Search, Bell, Info, AlertCircle, CheckCircle2, User, Mail, ShieldCheck, PieChart, DollarSign, LayoutDashboard, Settings, MoreVertical, Plus, ChevronRight].map((Icon, idx) => (
                    <div key={idx} className="h-14 w-14 rounded-xl bg-background border border-border/50 flex items-center justify-center group hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer shrink-0">
                       <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                 ))}
              </div>
           </CardContent>
        </Card>

      </div>
    </div>
  );
}
