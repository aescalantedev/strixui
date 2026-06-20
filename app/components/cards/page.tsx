"use client";

import * as React from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  Cloud, 
  Sun,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar as CalendarIcon,
  MessageSquare,
  MoreVertical,
  Plus,
  CreditCard,
  Zap,
  ChevronLeft,
  ChevronRight,
  Mail
} from "lucide-react";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer 
} from "recharts";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const sparklineData = [
  { value: 400 }, { value: 300 }, { value: 500 }, { value: 450 }, { value: 700 }, { value: 600 }, { value: 800 }
];

export default function CardsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
          Cards & Widgets
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Versatile containers for data visualization and user interaction.
        </p>
      </div>

      {/* SECTION 1: STATISTIC CARDS */}
      <div className="space-y-4">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50 ml-1">Statistic Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Sparkline Variation */}
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden relative group">
             <div className="absolute inset-x-0 bottom-0 h-16 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={sparklineData}>
                      <Area type="monotone" dataKey="value" stroke="var(--primary)" fill="var(--primary)" strokeWidth={2} />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Weekly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-black tracking-tighter">$12,840</div>
                <p className="text-[10px] font-bold text-emerald-500 uppercase mt-1">+14.2% Growth</p>
             </CardContent>
          </Card>

          {/* Big Icon Variation */}
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
             <CardContent className="p-6">
                <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm shadow-primary/10">
                      <Users className="h-6 w-6" />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Active Users</p>
                      <h3 className="text-2xl font-black tracking-tighter">2,450</h3>
                   </div>
                </div>
             </CardContent>
          </Card>

          {/* Minimalist Variation */}
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Conversion</CardTitle>
                <Badge variant="secondary" className="rounded-lg text-[9px] font-black uppercase tracking-tighter bg-emerald-500/10 text-emerald-600 border-none">3.2%</Badge>
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-black tracking-tighter">18.5%</div>
                <div className="w-full bg-secondary h-1 mt-3 rounded-full overflow-hidden">
                   <div className="bg-emerald-500 h-full w-[18.5%] rounded-full" />
                </div>
             </CardContent>
          </Card>
        </div>
      </div>

      {/* SECTION 2: PROFILE & SOCIAL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* User Profile Card */}
        <Card className="border-border/40 shadow-xl rounded-2xl overflow-hidden lg:col-span-1 flex flex-col bg-card/50 backdrop-blur-sm">
           <div className="h-24 bg-gradient-to-br from-primary to-primary/40" />
           <CardContent className="p-6 pt-0 -mt-10 flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 border-4 border-background shadow-xl ring-2 ring-primary/5">
                 <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback className="bg-primary text-primary-foreground font-black">SX</AvatarFallback>
              </Avatar>
              <div className="mt-4 space-y-1">
                 <h3 className="text-xl font-black uppercase tracking-tight">Strix Architect</h3>
                 <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Lead UI/UX Designer</p>
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground font-medium px-4">
                 Crafting high-end digital experiences with Next.js and Tailwind CSS.
              </p>
              <div className="flex gap-2 w-full mt-6">
                 <Button className="flex-1 rounded-xl h-9 text-[10px] font-black uppercase tracking-widest bg-primary text-primary-foreground">Follow</Button>
                 <Button variant="outline" className="flex-1 rounded-xl h-9 text-[10px] font-black uppercase tracking-widest border-border/50">Message</Button>
              </div>
           </CardContent>
        </Card>

        {/* Project Progress Card */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden lg:col-span-1">
           <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                 <Badge className="bg-orange-500/10 text-orange-600 border-none text-[8px] font-black uppercase tracking-widest">In Progress</Badge>
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter flex items-center gap-1">
                    <Clock className="h-3 w-3" /> May 24, 2026
                 </span>
              </div>
              <CardTitle className="text-lg font-black uppercase tracking-tight">Mobile App Redesign</CardTitle>
              <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">SaaS Dashboard optimization</CardDescription>
           </CardHeader>
           <CardContent className="space-y-6">
              <div className="space-y-2">
                 <div className="flex items-center justify-between text-[10px] font-black uppercase">
                    <span>Progress</span>
                    <span className="text-primary">68%</span>
                 </div>
                 <Progress value={68} className="h-1.5 bg-primary/10 shadow-inner" />
              </div>
              <div className="space-y-3 pt-2">
                 {[
                    { label: "User Interviews", checked: true },
                    { label: "Wireframing", checked: true },
                    { label: "High Fidelity UI", checked: false },
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <Checkbox checked={item.checked} className="rounded-md h-4 w-4 border-muted-foreground/30" />
                       <span className={cn("text-xs font-bold uppercase tracking-tight", item.checked ? "text-muted-foreground line-through opacity-50" : "text-foreground")}>
                          {item.label}
                       </span>
                    </div>
                 ))}
              </div>
           </CardContent>
           <CardFooter className="pt-2">
              <div className="flex -space-x-3 w-full">
                 {[1,2,3].map(i => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-background ring-2 ring-primary/5 shadow-md">
                       <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} />
                    </Avatar>
                 ))}
                 <div className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[9px] font-bold text-muted-foreground">+5</div>
                 <Button variant="ghost" size="icon" className="ml-auto rounded-full h-8 w-8 hover:bg-primary/5">
                    <Plus className="h-4 w-4 text-primary" />
                 </Button>
              </div>
           </CardFooter>
        </Card>

        {/* Activity Feed Widget */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden lg:col-span-1 flex flex-col">
           <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-tight">Recent Activity</CardTitle>
              <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">System events and logs</CardDescription>
           </CardHeader>
           <CardContent className="space-y-6 flex-1">
              {[
                 { user: "Sarah J.", action: "assigned you to", item: "New Ticket #42", time: "2m ago", icon: Mail },
                 { user: "Alex R.", action: "completed", item: "Landing Page", time: "1h ago", icon: CheckCircle2 },
                 { user: "System", action: "deployed", item: "Production v1.2", time: "4h ago", icon: Zap },
              ].map((activity, i) => (
                 <div key={i} className="flex items-start gap-4 group">
                    <div className="h-8 w-8 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                       <activity.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                       <p className="text-xs font-bold leading-none">
                          <span className="text-foreground">{activity.user}</span>{" "}
                          <span className="text-muted-foreground font-medium opacity-70 tracking-tight">{activity.action}</span>
                       </p>
                       <p className="text-[11px] text-primary font-black uppercase tracking-tight">{activity.item}</p>
                       <span className="text-[9px] font-bold text-muted-foreground opacity-40 uppercase tracking-tighter">{activity.time}</span>
                    </div>
                 </div>
              ))}
           </CardContent>
           <CardFooter className="bg-secondary/10 py-3">
              <Button variant="ghost" className="w-full text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all">View Full Logs</Button>
           </CardFooter>
        </Card>
      </div>

      {/* SECTION 3: INTERACTIVE WIDGETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
         {/* Calendar Widget */}
         <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden lg:col-span-2">
            <CardContent className="p-0 flex flex-col md:flex-row">
               <div className="p-6 md:border-r border-border/30 bg-secondary/5 shrink-0 flex flex-col justify-between w-full md:w-64">
                  <div className="space-y-1">
                     <h4 className="text-2xl font-black uppercase tracking-tight text-primary">May 2026</h4>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">System Calendar</p>
                  </div>
                  <div className="mt-8 space-y-4">
                     <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm" />
                        <span className="text-[10px] font-bold uppercase tracking-tight">Audit Meeting</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-sm" />
                        <span className="text-[10px] font-bold uppercase tracking-tight">V2 Launch</span>
                     </div>
                  </div>
                  <Button className="mt-8 rounded-xl h-10 text-[10px] font-black uppercase bg-primary text-primary-foreground shadow-lg shadow-primary/20">Add Event</Button>
               </div>
               <div className="flex-1 p-8 bg-background flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-8 px-2">
                    <span className="text-sm font-black uppercase tracking-[0.3em]">May 2026</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-7 w-7 rounded-lg border-border/50"><ChevronLeft className="h-3 w-3" /></Button>
                        <Button variant="outline" size="icon" className="h-7 w-7 rounded-lg border-border/50"><ChevronRight className="h-3 w-3" /></Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div key={day} className="text-[10px] font-black uppercase text-muted-foreground/40 tracking-widest">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center">
                    {[...Array(5)].map((_, i) => <div key={`empty-${i}`} className="h-9 w-9" />)}
                    
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isToday = day === 17;
                      const isEvent = day === 15 || day === 24;

                      return (
                        <div 
                          key={day} 
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold transition-all cursor-pointer relative mx-auto",
                            isToday ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 scale-110 z-10" : "hover:bg-secondary/80 text-foreground",
                            isEvent && !isToday && "text-primary border border-primary/20 bg-primary/5"
                          )}
                        >
                          {day}
                          {isEvent && !isToday && (
                            <div className="absolute top-1 right-1 h-1 w-1 rounded-full bg-primary" />
                          )}
                        </div>
                      );
                    })}
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Weather Widget */}
         <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden lg:col-span-1 bg-gradient-to-br from-secondary/20 to-primary/5">
            <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
               <Sun className="h-12 w-12 text-orange-400 animate-pulse" />
               <div className="mt-6 space-y-1">
                  <h3 className="text-4xl font-black tracking-tighter text-foreground">24°</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">San Francisco, CA</p>
                  <p className="text-[10px] font-medium text-orange-600/70 uppercase tracking-widest pt-2 flex items-center gap-1 justify-center">
                     <MapPin className="h-3 w-3" /> Sunny
                  </p>
               </div>
               <div className="grid grid-cols-3 gap-6 w-full mt-10 pt-6 border-t border-border/20">
                  <div>
                     <p className="text-[9px] font-bold text-muted-foreground uppercase">H: 26°</p>
                  </div>
                  <div className="border-x border-border/20">
                     <p className="text-[9px] font-bold text-muted-foreground uppercase">L: 18°</p>
                  </div>
                  <div>
                     <p className="text-[9px] font-bold text-muted-foreground uppercase">60%</p>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* CTA Card */}
         <Card className="border-none shadow-2xl rounded-2xl overflow-hidden lg:col-span-1 bg-primary text-primary-foreground relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] opacity-50" />
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Zap className="h-32 w-32 fill-primary-foreground" />
            </div>
            <CardHeader className="relative z-10">
               <Badge className="w-fit rounded-lg bg-white/20 text-white border-none text-[8px] font-black uppercase px-2 py-0.5 mb-4">Enterprise</Badge>
               <CardTitle className="text-xl font-black uppercase tracking-tight leading-tight">Take full control of your SaaS</CardTitle>
               <CardDescription className="text-white/70 text-xs font-medium leading-relaxed pt-2">Unlock advanced analytics and team collaboration tools today.</CardDescription>
            </CardHeader>
            <CardFooter className="relative z-10 pt-4">
               <Button className="w-full rounded-xl h-11 bg-white text-primary hover:bg-white/90 font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 group/btn">
                  Upgrade to Pro
                  <ChevronRight className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
               </Button>
            </CardFooter>
         </Card>

      </div>
    </div>
  );
}
