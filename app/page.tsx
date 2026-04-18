"use client";

import * as React from "react";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Calendar, 
  Download, 
  MoreVertical, 
  DollarSign,
  Users,
  TrendingUp,
  Activity,
  Filter,
  BarChart3
} from "lucide-react";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Pie,
  PieChart,
  Cell,
  Label,
  ResponsiveContainer
} from "recharts";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

import { 
  kpiData, 
  performanceData, 
  recentTransactions, 
  recentActivity 
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const kpiIcons = [DollarSign, Users, TrendingUp, Activity];

// Datos locales para asegurar sincronización de color exacta
const trafficChartData = [
  { name: "direct", value: 400, label: "Direct", fill: "var(--color-direct)" },
  { name: "social", value: 300, label: "Social", fill: "var(--color-social)" },
  { name: "referral", value: 300, label: "Referral", fill: "var(--color-referral)" },
  { name: "ads", value: 200, label: "Ads", fill: "var(--color-ads)" },
];

const totalTraffic = trafficChartData.reduce((acc, curr) => acc + curr.value, 0);

export default function DashboardPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-screen bg-background" />;
  }

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* SECTION A: CLEAN HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase tracking-tight">
              Dashboard Overview
            </h1>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">
               <Calendar className="h-3 w-3" />
               <span>Apr 17 — May 17, 2026</span>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="w-fit">
            <TabsList className="bg-secondary/40 border border-border/50 rounded-xl h-10 p-1">
              <TabsTrigger value="overview" className="rounded-lg px-4 text-xs font-bold uppercase tracking-tight">Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-lg px-4 text-xs font-bold uppercase tracking-tight">Analytics</TabsTrigger>
              <TabsTrigger value="reports" className="rounded-lg px-4 text-xs font-bold uppercase tracking-tight">Reports</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="flex items-center gap-3 pb-1">
          <Button variant="outline" className="rounded-xl border-border/50 shadow-sm h-10 gap-2 text-[10px] font-black uppercase tracking-[0.1em] px-4">
            <Filter className="h-3.5 w-3.5" />
            Filters
          </Button>
          <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5">
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
        </div>
      </div>

      {/* SECTION B: REFINED KPI GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpiIcons[index];
          return (
            <Card key={kpi.title} className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl group relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                  {kpi.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black tracking-tighter mb-1">{kpi.value}</div>
                <div className="flex items-center gap-1.5">
                  <span className={cn(
                    "flex items-center text-[10px] font-black uppercase tracking-tighter",
                    kpi.trend === "up" ? "text-emerald-500" : "text-rose-500"
                  )}>
                    {kpi.trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                    {kpi.trendValue}
                  </span>
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest opacity-50">
                    vs last month
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* SECTION C: CENTRAL CHARTS */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        <Card className="lg:col-span-8 border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div className="space-y-1">
              <CardTitle className="text-lg font-black uppercase tracking-tight">Performance Analysis</CardTitle>
              <CardDescription className="text-xs font-bold uppercase tracking-tighter opacity-60">Revenue growth trajectory</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8"><MoreVertical className="h-4 w-4 text-muted-foreground" /></Button>
          </CardHeader>
          <CardContent className="px-2 sm:px-6">
            <ChartContainer 
              config={{ sales: { label: "Sales", color: "var(--primary)" } }}
              className="h-[380px] w-full"
            >
              <AreaChart data={performanceData} margin={{ left: 12, right: 12, top: 12 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted/20" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={12} className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest" />
                <YAxis tickLine={false} axisLine={false} tickMargin={12} className="text-[10px] font-black text-muted-foreground/50 uppercase" tickFormatter={(value) => `$${value}`} />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <Area type="monotone" dataKey="sales" stroke="var(--primary)" fillOpacity={1} fill="url(#colorSales)" strokeWidth={3} dot={{ r: 4, fill: "var(--primary)", strokeWidth: 2, stroke: "var(--background)" }} activeDot={{ r: 6, strokeWidth: 0 }} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* --- TRAFFIC SOURCES CARD (FIXED COLORS) --- */}
        <Card className="lg:col-span-4 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight">Traffic Sources</CardTitle>
            <CardDescription className="text-xs font-bold uppercase tracking-tighter opacity-60">Acquisition channels</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-4">
            <ChartContainer 
              config={{
                direct: { label: "Direct", color: "var(--chart-1)" },
                social: { label: "Social", color: "var(--chart-2)" },
                referral: { label: "Referral", color: "var(--chart-3)" },
                ads: { label: "Ads", color: "var(--chart-4)" },
              }}
              className="h-[250px] w-full"
            >
              <PieChart>
                <Pie
                  data={trafficChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                  nameKey="name"
                >
                  {/* Celdas con relleno dinámico desde variables inline */}
                  {trafficChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} stroke="transparent" />
                  ))}

                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-black tracking-tighter">
                              {totalTraffic.toLocaleString()}
                            </tspan>
                            <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 22} className="fill-muted-foreground text-[9px] font-black uppercase tracking-[0.2em] opacity-60">
                              Sessions
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              </PieChart>
            </ChartContainer>

            <div className="space-y-4 mt-6">
               {trafficChartData.map((item) => {
                 const percentage = Math.round((item.value / totalTraffic) * 100);
                 return (
                   <div key={item.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                           <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
                           <span className="text-foreground opacity-80">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-foreground">{item.value}</span>
                           <span className="text-muted-foreground opacity-30">{percentage}%</span>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000" 
                          style={{ backgroundColor: item.fill, width: `${percentage}%` }} 
                        />
                      </div>
                   </div>
                 );
               })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SECTION D: LOWER DATA */}
      <div className="grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-7 border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-6">
            <div className="space-y-1">
              <CardTitle className="text-lg font-black uppercase tracking-tight">Recent Transactions</CardTitle>
              <CardDescription className="text-xs font-bold uppercase tracking-tighter opacity-60">Financial activity</CardDescription>
            </div>
            <Button variant="secondary" size="sm" className="rounded-xl h-8 px-4 text-[9px] font-black uppercase tracking-[0.2em]">View All</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-secondary/20 border-none">
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="font-black text-[9px] uppercase tracking-widest opacity-50">Customer</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest opacity-50">Status</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest opacity-50">Date</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest text-right opacity-50">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((tx) => (
                  <TableRow key={tx.id} className="hover:bg-secondary/20 transition-colors border-border/30 h-14">
                    <TableCell>
                      <div className="font-black text-sm tracking-tight">{tx.customer}</div>
                      <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter opacity-50">{tx.id}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn(
                        "rounded-md px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter border-none",
                        tx.status === "Paid" ? "bg-emerald-500/10 text-emerald-600" : tx.status === "Pending" ? "bg-orange-500/10 text-orange-600" : "bg-rose-500/10 text-rose-600"
                      )}>
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[10px] font-bold text-muted-foreground uppercase opacity-70">{tx.date}</TableCell>
                    <TableCell className="text-right font-black text-sm tracking-tight">{tx.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-5 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">System Activity</CardTitle>
            <CardDescription className="text-xs font-bold uppercase tracking-tighter opacity-60">Engagement feed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex-1">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 group cursor-default">
                <Avatar className="h-10 w-10 border border-border/50 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback className="bg-primary/5 text-primary text-[10px] font-black">{activity.user.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs leading-none font-black uppercase tracking-tight">
                      <span className="text-foreground">{activity.user}</span>{" "}
                      <span className="text-muted-foreground font-bold opacity-40 lowercase tracking-normal">{activity.action}</span>
                    </p>
                    <span className="text-[9px] text-muted-foreground font-black uppercase tracking-tighter opacity-30">{activity.time}</span>
                  </div>
                  <p className="text-[11px] text-primary font-bold uppercase tracking-tight">{activity.item}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-auto pt-6 border-t border-border/50">
               <div className="p-5 rounded-2xl bg-secondary/30 border border-border/40 relative overflow-hidden group">
                 <div className="relative z-10 space-y-3">
                   <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">Server Health</span>
                      <span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">OPTIMAL</span>
                   </div>
                   <div className="w-full bg-secondary h-1 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[99.9%] shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                   </div>
                 </div>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
