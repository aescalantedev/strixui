"use client";

import * as React from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  MessageSquare, 
  Paperclip,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function KanbanPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] p-6 md:p-8 bg-background animate-in fade-in duration-700 overflow-hidden font-sans">
      
      {/* HEADER & CONTROLS */}
      <div className="flex flex-col gap-6 shrink-0">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Project Kanban</h1>
            <p className="text-sm text-muted-foreground font-medium">Manage sprint tasks and track progress across the team.</p>
          </div>
          <Button className="h-10 rounded-lg bg-primary text-primary-foreground font-semibold px-6 shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
            <Plus className="mr-2 h-4 w-4" /> New Task
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search tasks..." 
              className="pl-9 h-10 border-border/50 bg-muted/40 rounded-xl focus-visible:ring-primary/20 text-sm font-medium"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-10 rounded-xl border-border/50 gap-2 text-xs font-semibold px-4 bg-muted/20">
                <Filter className="h-3.5 w-3.5 text-muted-foreground" /> Status <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl min-w-[150px]">
              <DropdownMenuItem className="text-xs font-bold rounded-lg cursor-pointer">Backlog</DropdownMenuItem>
              <DropdownMenuItem className="text-xs font-bold rounded-lg cursor-pointer">In Progress</DropdownMenuItem>
              <DropdownMenuItem className="text-xs font-bold rounded-lg cursor-pointer">Done</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* THE BOARD */}
      <div className="flex gap-6 overflow-x-auto pb-4 mt-8 flex-1 items-start min-h-0 [&::-webkit-scrollbar]:hidden">
        
        {/* COLUMN: TO DO */}
        <div className="w-[320px] flex-shrink-0 flex flex-col gap-3 bg-muted/20 border border-border/30 p-3 rounded-xl max-h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-between px-1 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">To Do</h3>
              <div className="flex h-5 px-1.5 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground">3</div>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground/40 hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <Card className="p-4 bg-card border-border/50 rounded-lg shadow-sm hover:border-border transition-colors cursor-grab group">
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="rounded-md border-destructive/20 text-destructive bg-destructive/5 text-[9px] font-bold uppercase">Critical</Badge>
                <Badge variant="secondary" className="rounded-md text-[9px] font-bold uppercase bg-muted/60 text-muted-foreground">Feature</Badge>
              </div>
              <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">Implement Auth API Endpoints</h4>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">Secure session management and cookie synchronization with SSR support.</p>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-border/40">
                <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-medium">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Oct 24</span>
                  <span className="flex items-center gap-1.5"><MessageSquare className="h-3.5 w-3.5" /> 12</span>
                </div>
                <div className="flex -space-x-1.5">
                  <Avatar className="h-6 w-6 border-2 border-card"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
                  <Avatar className="h-6 w-6 border-2 border-card"><AvatarImage src="https://github.com/nutlope.png" /></Avatar>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50 rounded-lg shadow-sm hover:border-border transition-colors cursor-grab group">
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="rounded-md text-[9px] font-bold uppercase text-muted-foreground/60">Research</Badge>
              </div>
              <h4 className="text-sm font-medium text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">Analyze Tailwind v4 migration</h4>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-border/40">
                <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] font-medium">
                  <Clock className="h-3.5 w-3.5" /> Oct 26
                </div>
                <Avatar className="h-6 w-6 border-2 border-card"><AvatarImage src="https://github.com/nutlope.png" /></Avatar>
              </div>
            </Card>
          </div>
        </div>

        {/* COLUMN: IN PROGRESS */}
        <div className="w-[320px] flex-shrink-0 flex flex-col gap-3 bg-muted/20 border border-border/30 p-3 rounded-xl max-h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-between px-1 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">In Progress</h3>
              <div className="flex h-5 px-1.5 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground">1</div>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground/40 hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {/* DROP ZONE SIMULATION */}
            <div className="border border-dashed border-border/60 bg-muted/10 h-[100px] rounded-lg flex items-center justify-center transition-all animate-pulse">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">[ Drop Task Here ]</span>
            </div>

            <Card className="p-4 bg-card border-border/50 rounded-lg shadow-sm hover:border-border transition-colors cursor-grab group border-primary/30">
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="rounded-md border-primary/20 text-primary bg-primary/5 text-[9px] font-bold uppercase">Active</Badge>
              </div>
              <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">Design marketing landing</h4>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">Focus on Soft UI Evolution and dark mode accessibility.</p>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-border/40">
                <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-medium">
                  <span className="flex items-center gap-1.5 text-primary"><Clock className="h-3.5 w-3.5" /> Today</span>
                  <span className="flex items-center gap-1.5"><Paperclip className="h-3.5 w-3.5" /> 3</span>
                </div>
                <Avatar className="h-6 w-6 border-2 border-card"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
              </div>
            </Card>
          </div>
        </div>

        {/* COLUMN: DONE */}
        <div className="w-[320px] flex-shrink-0 flex flex-col gap-3 bg-muted/20 border border-border/30 p-3 rounded-xl max-h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-between px-1 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">Done</h3>
              <div className="flex h-5 px-1.5 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground">4</div>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground/40 hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <Card className="p-4 bg-card border-border/50 rounded-lg shadow-none opacity-70 group grayscale-[30%]">
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="rounded-md border-emerald-500/20 text-emerald-600 bg-emerald-500/5 text-[9px] font-bold uppercase">Core</Badge>
              </div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1 leading-snug">Setup Global Theme Engine</h4>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-border/40">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Completed</span>
                <Avatar className="h-6 w-6 border-2 border-card opacity-50"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
              </div>
            </Card>
          </div>
        </div>

      </div>

    </div>
  );
}
