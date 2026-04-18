"use client";

import * as React from "react";
import { 
  Home, Mail, User, Settings, Bell, Search, Calendar, Camera, Map, Star, 
  Heart, Share, Download, Trash, Edit, Plus, Minus, Check, X, Info, 
  AlertCircle, AlertTriangle, Shield, Lock, Unlock, Key, Phone, Video, Mic, Music, 
  Play, Pause, FastForward, Rewind, Repeat, Shuffle, Layers, Database, Cloud, Wifi, 
  Bluetooth, Cpu, Smartphone, Monitor, Laptop, Printer, Save, File, Folder, Image, 
  Link as LinkIcon, ExternalLink, Menu, Grid, List, Zap, Eye, PieChart, BarChart3, Shapes
} from "lucide-react";

import { cn } from "@/lib/utils";

const iconList = [
  { name: "Home", icon: Home },
  { name: "Mail", icon: Mail },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Bell", icon: Bell },
  { name: "Search", icon: Search },
  { name: "Calendar", icon: Calendar },
  { name: "Camera", icon: Camera },
  { name: "Map", icon: Map },
  { name: "Star", icon: Star },
  { name: "Heart", icon: Heart },
  { name: "Share", icon: Share },
  { name: "Download", icon: Download },
  { name: "Trash", icon: Trash },
  { name: "Edit", icon: Edit },
  { name: "Plus", icon: Plus },
  { name: "Minus", icon: Minus },
  { name: "Check", icon: Check },
  { name: "X", icon: X },
  { name: "Info", icon: Info },
  { name: "Alert Circle", icon: AlertCircle },
  { name: "Alert Triangle", icon: AlertTriangle },
  { name: "Shield", icon: Shield },
  { name: "Lock", icon: Lock },
  { name: "Unlock", icon: Unlock },
  { name: "Key", icon: Key },
  { name: "Phone", icon: Phone },
  { name: "Video", icon: Video },
  { name: "Mic", icon: Mic },
  { name: "Music", icon: Music },
  { name: "Play", icon: Play },
  { name: "Pause", icon: Pause },
  { name: "Fast Forward", icon: FastForward },
  { name: "Rewind", icon: Rewind },
  { name: "Repeat", icon: Repeat },
  { name: "Shuffle", icon: Shuffle },
  { name: "Layers", icon: Layers },
  { name: "Database", icon: Database },
  { name: "Cloud", icon: Cloud },
  { name: "Wifi", icon: Wifi },
  { name: "Bluetooth", icon: Bluetooth },
  { name: "Cpu", icon: Cpu },
  { name: "Smartphone", icon: Smartphone },
  { name: "Monitor", icon: Monitor },
  { name: "Laptop", icon: Laptop },
  { name: "Printer", icon: Printer },
  { name: "Save", icon: Save },
  { name: "File", icon: File },
  { name: "Folder", icon: Folder },
  { name: "Image", icon: Image },
  { name: "Link", icon: LinkIcon },
  { name: "External Link", icon: ExternalLink },
  { name: "Menu", icon: Menu },
  { name: "Grid", icon: Grid },
  { name: "List", icon: List },
  { name: "Zap", icon: Zap },
  { name: "Eye", icon: Eye },
  { name: "Pie Chart", icon: PieChart },
  { name: "Bar Chart", icon: BarChart3 },
  { name: "Shapes", icon: Shapes },
];

export default function IconsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredIcons = iconList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            Lucide React Icons
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            A beautiful and consistent icon toolkit used throughout Strix UI.
          </p>
        </div>

        <div className="relative group w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text"
            placeholder="Search icons..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 h-11 rounded-xl border border-border/50 bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
          />
        </div>
      </div>

      {/* ICON GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {filteredIcons.map((item, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col items-center justify-center p-4 border border-border/40 bg-card rounded-2xl hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-square"
          >
            <item.icon className="h-6 w-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 group-hover:text-foreground text-center truncate w-full">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* NO RESULTS FOOTER */}
      {filteredIcons.length === 0 && (
        <div className="py-20 flex flex-col items-center justify-center gap-4 text-center">
           <div className="p-4 rounded-full bg-secondary/40 text-muted-foreground">
              <Search className="h-10 w-10 opacity-20" />
           </div>
           <div className="space-y-1">
              <p className="font-black uppercase tracking-widest text-sm">No icons found</p>
              <p className="text-xs text-muted-foreground font-medium">Try searching for a different keyword.</p>
           </div>
        </div>
      )}

      {/* STATUS FOOTER */}
      <div className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-border/30 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
               Total Icons: <span className="text-foreground">{filteredIcons.length}</span>
            </p>
         </div>
         <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.2em]">
            Strix UI v1.0.0
         </p>
      </div>
    </div>
  );
}
