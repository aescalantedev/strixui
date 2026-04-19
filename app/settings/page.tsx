"use client";

import { 
  User, 
  Settings, 
  Monitor, 
  Bell, 
  Layout, 
  Plus, 
  Trash2, 
  Camera,
  Mail,
  AtSign
} from "lucide-react";

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { title: "Profile", icon: User, active: true },
  { title: "Account", icon: Settings, active: false },
  { title: "Appearance", icon: Monitor, active: false },
  { title: "Notifications", icon: Bell, active: false },
  { title: "Display", icon: Layout, active: false },
];

export default function SettingsProfilePage() {
  return (
    <div className="p-6 md:p-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* PAGE HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">Settings</h1>
        <p className="text-sm text-muted-foreground font-medium">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Separator className="bg-border/50" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        
        {/* LEFT NAV BAR */}
        <aside className="lg:w-1/5">
          <nav className="flex flex-col space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className={cn(
                  "justify-start h-10 px-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all",
                  item.active 
                    ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.title}
              </Button>
            ))}
          </nav>
        </aside>

        {/* PROFILE CONTENT */}
        <div className="flex-1 lg:max-w-2xl space-y-8">
          <div>
            <h2 className="text-lg font-black uppercase tracking-tight">Profile</h2>
            <p className="text-sm text-muted-foreground font-medium mt-1">
              This is how others will see you on the site.
            </p>
          </div>
          
          <Separator className="bg-border/50" />

          <div className="space-y-10">
            
            {/* AVATAR SECTION */}
            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">Profile Picture</Label>
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/10 border border-border/50 border-dashed">
                <Avatar className="h-20 w-20 border-2 border-background shadow-xl">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-primary/5 text-primary font-black text-xl">AS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button size="sm" className="h-9 rounded-lg font-bold text-xs gap-2">
                      <Camera className="h-3.5 w-3.5" />
                      Change avatar
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 rounded-lg font-bold text-xs text-destructive hover:bg-destructive/5 hover:text-destructive">
                      Remove
                    </Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
            </div>

            {/* FORM FIELDS */}
            <div className="grid gap-6">
              
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1 flex items-center gap-2">
                  <AtSign className="h-3 w-3" /> Username
                </Label>
                <Input
                  id="username"
                  defaultValue="shadcn"
                  className="h-11 rounded-xl border-border bg-background focus-visible:ring-primary/20 transition-all font-medium"
                />
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight ml-1">
                  This is your public display name. It can be your real name or a pseudonym.
                </p>
              </div>

              <div className="grid gap-2 opacity-70">
                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1 flex items-center gap-2">
                  <Mail className="h-3 w-3" /> Email Address
                </Label>
                <Input
                  id="email"
                  defaultValue="m@example.com"
                  disabled
                  className="h-11 rounded-xl border-border bg-muted cursor-not-allowed font-medium"
                />
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight ml-1">
                  Your primary account email. You can change this in the <span className="text-primary cursor-pointer hover:underline">Account</span> section.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">Biography</Label>
                <Textarea
                  id="bio"
                  placeholder="I'm a frontend developer based in..."
                  className="min-h-[120px] rounded-2xl border-border bg-background focus-visible:ring-primary/20 transition-all font-medium resize-none p-4"
                />
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight ml-1">
                  Tell us a bit about yourself. You can <span className="text-primary font-bold">@mention</span> other users and organizations.
                </p>
              </div>

              <div className="grid gap-2">
                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">URLs</Label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      defaultValue="https://twitter.com/shadcn"
                      className="h-11 rounded-xl border-border bg-background focus-visible:ring-primary/20 transition-all font-medium"
                    />
                    <Button variant="ghost" size="icon" className="h-11 w-11 rounded-xl text-destructive hover:bg-destructive/5">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="h-9 rounded-lg font-bold text-xs gap-2 border-dashed border-border/60 hover:bg-primary/5 hover:text-primary transition-all">
                    <Plus className="h-3.5 w-3.5" />
                    Add another URL
                  </Button>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <Button className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest text-[11px] shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                Update profile
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
