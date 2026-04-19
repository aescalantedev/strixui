"use client";

import * as React from "react";
import { 
  UserPlus, 
  Mail, 
  Phone, 
  User as UserIcon, 
  ShieldCheck, 
  Lock, 
  ArrowLeft,
  Check,
  Info,
  BadgeCheck,
  ShieldAlert,
  Eye
} from "lucide-react";
import Link from "next/link";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function AddUserPage() {
  // Estado local para el Live Preview
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Viewer",
    username: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "New User";
  const userRole = formData.role;

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/users" 
          className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to User List
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
              Add New User
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Register a new member and assign their initial permissions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* LEFT COLUMN: MAIN FORM (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-secondary/10 border-b border-border/30">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Legal name and contact details</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="Enter first name" 
                    className="rounded-xl border-border/50 h-11"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Enter last name" 
                    className="rounded-xl border-border/50 h-11"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="user@strix.ui" 
                      className="pl-10 rounded-xl border-border/50 h-11"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input id="phone" placeholder="+1 (555) 000-0000" className="pl-10 rounded-xl border-border/50 h-11" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-secondary/10 border-b border-border/30">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Account & Security
              </CardTitle>
              <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Credentials and workspace role</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Username</Label>
                  <Input 
                    id="username" 
                    name="username"
                    placeholder="john.doe" 
                    className="rounded-xl border-border/50 h-11"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">User Role</Label>
                  <Select onValueChange={handleRoleChange} defaultValue="Viewer">
                    <SelectTrigger className="rounded-xl border-border/50 h-11">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl">
                      <SelectItem value="Admin">Administrator</SelectItem>
                      <SelectItem value="Editor">Editor</SelectItem>
                      <SelectItem value="Viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-border/40" />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pass" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="pass" type="password" placeholder="••••••••" className="pl-10 rounded-xl border-border/50 h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="confirm" type="password" placeholder="••••••••" className="pl-10 rounded-xl border-border/50 h-11" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/40">
                 <div className="space-y-0.5">
                    <Label className="text-sm font-bold uppercase tracking-tight">Force password reset</Label>
                    <p className="text-xs text-muted-foreground font-medium">The user will be prompted to change their password on first login.</p>
                 </div>
                 <Switch className="data-[state=checked]:bg-primary" />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-4">
             <Button variant="outline" className="rounded-xl h-12 px-8 font-black uppercase tracking-widest text-[10px] border-border/50">Cancel</Button>
             <Button className="rounded-xl h-12 px-10 font-black uppercase tracking-widest text-[10px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">Create User</Button>
          </div>
        </div>

        {/* RIGHT COLUMN: WIDGETS (1/3) */}
        <div className="space-y-8">
          
          {/* PROFILE PREVIEW */}
          <Card className="border-border/40 shadow-xl rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm sticky top-24 transition-all duration-500">
             <div className="h-24 bg-gradient-to-br from-primary/20 to-primary/5" />
             <CardContent className="p-6 pt-0 -mt-10 flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 border-4 border-background shadow-xl ring-2 ring-primary/10">
                   <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.username || 'default'}`} />
                   <AvatarFallback className="bg-primary text-primary-foreground font-black text-xl">
                      {formData.firstName.substring(0, 1)}{formData.lastName.substring(0, 1) || "U"}
                   </AvatarFallback>
                </Avatar>
                <div className="mt-4 space-y-1">
                   <h3 className="text-xl font-black uppercase tracking-tight">{fullName}</h3>
                   <p className="text-sm text-muted-foreground font-medium line-clamp-1">{formData.email || "user@strix.ui"}</p>
                </div>
                <Badge className={cn(
                  "mt-4 rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-widest border-none shadow-none",
                  userRole === "Admin" && "bg-primary text-primary-foreground",
                  userRole === "Editor" && "bg-blue-500 text-white",
                  userRole === "Viewer" && "bg-slate-500 text-white"
                )}>
                   {userRole}
                </Badge>
                
                <div className="grid grid-cols-2 gap-4 w-full mt-8 border-t border-border/30 pt-6">
                   <div className="text-center">
                      <p className="text-[10px] font-black text-muted-foreground uppercase opacity-60">Status</p>
                      <div className="text-xs font-bold text-emerald-500 uppercase mt-1 flex items-center justify-center gap-1">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         Active
                      </div>
                   </div>
                   <div className="text-center border-l border-border/30">
                      <p className="text-[10px] font-black text-muted-foreground uppercase opacity-60">Member</p>
                      <p className="text-xs font-bold text-foreground uppercase mt-1">May 2026</p>
                   </div>
                </div>
             </CardContent>
          </Card>

          {/* ACCESS INFO */}
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden bg-secondary/10">
             <CardHeader className="pb-3">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                   <Info className="h-4 w-4 text-primary" />
                   Role Information
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-background/50 border border-border/30 space-y-2">
                   {userRole === "Admin" && (
                     <>
                        <div className="flex items-center gap-2 text-primary">
                           <BadgeCheck className="h-4 w-4" />
                           <span className="text-xs font-black uppercase">Full Ownership</span>
                        </div>
                        <p className="text-[11px] font-medium leading-relaxed text-muted-foreground">This role has complete control. Can delete data, change billing, and manage other administrators.</p>
                     </>
                   )}
                   {userRole === "Editor" && (
                     <>
                        <div className="flex items-center gap-2 text-blue-500">
                           <BadgeCheck className="h-4 w-4" />
                           <span className="text-xs font-black uppercase">Content Management</span>
                        </div>
                        <p className="text-[11px] font-medium leading-relaxed text-muted-foreground">Can create and edit all dashboard resources. Cannot access system logs or billing settings.</p>
                     </>
                   )}
                   {userRole === "Viewer" && (
                     <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                           <Eye className="h-4 w-4" />
                           <span className="text-xs font-black uppercase">Observation Only</span>
                        </div>
                        <p className="text-[11px] font-medium leading-relaxed text-muted-foreground">Read-only access. The user can see all data but cannot perform any write operations or changes.</p>
                     </>
                   )}
                </div>
                
                <div className="flex items-start gap-3 p-3 text-rose-500 bg-rose-500/5 rounded-xl border border-rose-500/10">
                   <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
                   <p className="text-[10px] font-bold leading-tight uppercase tracking-tight">Security Alert: Administrators should use 2FA after the first login.</p>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
