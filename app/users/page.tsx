"use client";

import * as React from "react";
import { 
  Plus, 
  Search, 
  UserCog, 
  UserMinus, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  MoreVertical,
  Filter
} from "lucide-react";

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { users } from "@/lib/mock-users";
import { cn } from "@/lib/utils";

export default function UserListPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);

  // Filtrado de usuarios
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lógica de Selección Masiva
  const isAllSelected = filteredUsers.length > 0 && selectedUsers.length === filteredUsers.length;
  
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id));
    }
  };

  const toggleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId) 
        : [...prev, userId]
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* SECTION A: PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            User Management
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Manage your workspace members and their access levels.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 rounded-xl border-border/50 bg-secondary/20 focus-visible:ring-primary/20 transition-all"
            />
          </div>
          
          {/* Botón de acción masiva condicional */}
          {selectedUsers.length > 0 && (
            <Button variant="destructive" className="rounded-xl h-10 px-4 animate-in zoom-in-95 duration-200 font-bold text-xs">
               Delete ({selectedUsers.length})
            </Button>
          )}

          <Button variant="outline" className="rounded-xl border-border/50 h-10 gap-2 text-[10px] font-black uppercase tracking-widest px-4">
             <Filter className="h-3.5 w-3.5" />
             Filters
          </Button>
          <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5 transition-all active:scale-95 shrink-0">
            <Plus className="h-4 w-4" />
            Add New User
          </Button>
        </div>
      </div>

      {/* SECTION B: DATA TABLE PRO */}
      <div className="rounded-2xl border border-border/40 bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary/30">
            <TableRow className="hover:bg-transparent border-border/50">
              <TableHead className="w-[50px] px-6">
                 <Checkbox 
                   checked={isAllSelected}
                   onCheckedChange={toggleSelectAll}
                   className="rounded-sm border-muted-foreground/30" 
                 />
              </TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-4">User</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest">Role</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest">Status</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest">Last Login</TableHead>
              <TableHead className="text-right px-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow 
                key={user.id} 
                className={cn(
                  "hover:bg-muted/50 transition-colors border-border/30 group",
                  selectedUsers.includes(user.id) && "bg-primary/5 hover:bg-primary/10"
                )}
              >
                <TableCell className="px-6">
                   <Checkbox 
                     checked={selectedUsers.includes(user.id)}
                     onCheckedChange={() => toggleSelectUser(user.id)}
                     className="rounded-sm border-muted-foreground/30" 
                   />
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-border/50 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-primary/5 text-primary text-xs font-black">
                        {user.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-black text-sm tracking-tight">{user.name}</span>
                      <span className="text-[11px] text-muted-foreground font-medium">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={cn(
                    "rounded-lg px-2.5 py-0.5 text-[9px] font-black uppercase tracking-tighter border-none shadow-none",
                    user.role === "Admin" && "bg-primary/10 text-primary",
                    user.role === "Editor" && "bg-blue-500/10 text-blue-600",
                    user.role === "Viewer" && "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                  )}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-muted-foreground/30"
                    )} />
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      user.status === "Active" ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {user.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase opacity-70 tracking-tight">
                    {user.lastLogin}
                  </span>
                </TableCell>
                <TableCell className="text-right px-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl min-w-[160px] p-2 z-[100] shadow-xl border-border/50">
                      <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 pb-2">User Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="rounded-lg cursor-pointer gap-2 py-2">
                        <UserCog className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">Edit Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg cursor-pointer gap-2 py-2 text-rose-500 focus:text-rose-500 focus:bg-rose-50/10">
                        <UserMinus className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">Suspend User</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* SECTION C: PAGINATION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-50">
          Showing {filteredUsers.length} of {users.length} system users
        </p>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-xl border-border/50 h-9 px-4 gap-1 text-[10px] font-black uppercase tracking-widest disabled:opacity-30"
            disabled
          >
            <ChevronLeft className="h-3 w-3" />
            Prev
          </Button>
          <div className="flex items-center gap-1 mx-2">
             <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-black shadow-sm">1</div>
             <div className="h-8 w-8 rounded-lg hover:bg-secondary/50 flex items-center justify-center text-[10px] font-black transition-colors cursor-pointer text-muted-foreground">2</div>
             <div className="h-8 w-8 rounded-lg hover:bg-secondary/50 flex items-center justify-center text-[10px] font-black transition-colors cursor-pointer text-muted-foreground">3</div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-xl border-border/50 h-9 px-4 gap-1 text-[10px] font-black uppercase tracking-widest"
          >
            Next
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
