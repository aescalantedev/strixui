"use client";

import * as React from "react";
import { 
  Calendar, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  MousePointer2,
  Share2,
  ChevronDown
} from "lucide-react";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  ComposedChart, 
  Area, 
  Line
} from "recharts";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

import { 
  demographicsData, 
  weeklyConversionsData, 
  annualTrendData 
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function ChartSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-[300px] w-full animate-pulse rounded-xl bg-muted/20" />
    </div>
  );
}

export default function AnalyticsPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* SECTION A: PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            Analytics Performance
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Strategic insights and behavioral data analysis.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 h-10 rounded-xl border border-border/50 bg-secondary/20 cursor-pointer hover:bg-secondary/30 transition-colors">
             <Calendar className="h-4 w-4 text-muted-foreground" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Last 12 Months</span>
             <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] h-10 rounded-xl border-border/50 bg-secondary/10 font-bold text-[10px] uppercase tracking-widest">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="all">Full Report</SelectItem>
              <SelectItem value="summary">Executive</SelectItem>
              <SelectItem value="csv">Raw CSV</SelectItem>
            </SelectContent>
          </Select>
          <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5 transition-all active:scale-95">
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
        </div>
      </div>

      {/* SECTION B: ROW 1 (RADAR + STACKED BAR) */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        
        <Card className="lg:col-span-5 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col min-w-0">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
               <CardTitle className="text-lg font-black uppercase tracking-tight">Audience Demographics</CardTitle>
               <Share2 className="h-4 w-4 text-muted-foreground/30" />
            </div>
            <CardDescription className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Age & Platform distribution</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center min-h-[400px] pt-6">
            {!isMounted ? <ChartSkeleton /> : (
              <ChartContainer 
                config={{
                  desktop: { label: "Desktop", color: "var(--primary)" },
                  mobile: { label: "Mobile", color: "var(--chart-2)" },
                }}
                className="h-[350px] w-full"
              >
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={demographicsData}>
                  <PolarGrid stroke="var(--border)" strokeOpacity={0.5} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--muted-foreground)", fontSize: 9, fontWeight: 800 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Radar
                    name="Desktop"
                    dataKey="desktop"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    fill="var(--primary)"
                    fillOpacity={0.35}
                  />
                  <Radar
                    name="Mobile"
                    dataKey="mobile"
                    stroke="var(--chart-2)"
                    strokeWidth={2}
                    fill="var(--chart-2)"
                    fillOpacity={0.35}
                  />
                  <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '20px' }} />
                </RadarChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-7 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col min-w-0">
          <CardHeader className="pb-0">
             <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-black uppercase tracking-tight">Weekly Conversions</CardTitle>
                <div className="flex gap-1.5 items-center">
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Live Traffic</span>
                </div>
             </div>
            <CardDescription className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Source breakdown</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-[400px] pt-8">
            {!isMounted ? <ChartSkeleton /> : (
              <ChartContainer 
                config={{
                  direct: { label: "Direct", color: "var(--primary)" },
                  social: { label: "Social", color: "var(--chart-2)" },
                  email: { label: "Email", color: "var(--chart-3)" },
                }}
                className="h-[350px] w-full"
              >
                <BarChart data={weeklyConversionsData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }} barSize={28}>
                  <CartesianGrid vertical={false} strokeDasharray="4" strokeOpacity={0.1} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="direct" stackId="a" fill="var(--primary)" />
                  <Bar dataKey="social" stackId="a" fill="var(--chart-2)" />
                  <Bar dataKey="email" stackId="a" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
                  <Legend verticalAlign="bottom" iconType="rect" wrapperStyle={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '30px' }} />
                </BarChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>
      </div>

      {/* SECTION C: ROW 2 (COMPOSED TREND CHART) */}
      <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden min-w-0">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-xl font-black uppercase tracking-tight">Traffic & Bounce Rate Trends</CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase tracking-widest opacity-60">Fiscal year 2026 performance analysis</CardDescription>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-muted-foreground uppercase opacity-40 tracking-widest">Avg. Bounce</span>
                <span className="text-sm font-black text-muted-foreground">32.4%</span>
             </div>
             <div className="h-8 w-[1px] bg-border/30" />
             <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-muted-foreground uppercase opacity-40 tracking-widest">Sessions</span>
                <span className="text-sm font-black text-primary">1.2M</span>
             </div>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:px-6 min-h-[450px]">
          {!isMounted ? <div className="h-[400px] w-full animate-pulse rounded-xl bg-muted/20" /> : (
            <ChartContainer 
              config={{
                traffic: { label: "Traffic", color: "var(--primary)" },
                bounceRate: { label: "Bounce Rate", color: "var(--muted-foreground)" },
              }}
              className="h-[450px] w-full"
            >
              <ComposedChart data={annualTrendData} margin={{ left: 12, right: 12, top: 12 }}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.12}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.08} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800, opacity: 0.5 }} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800, opacity: 0.5 }} tickFormatter={(value) => `${value/1000}k`} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800, opacity: 0.3 }} tickFormatter={(value) => `${value}%`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="traffic" 
                  stroke="var(--primary)" 
                  fillOpacity={1} 
                  fill="url(#colorTraffic)" 
                  strokeWidth={3}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="bounceRate" 
                  stroke="var(--muted-foreground)" 
                  strokeWidth={2} 
                  strokeDasharray="6 6"
                  dot={false}
                />
                <Legend verticalAlign="bottom" wrapperStyle={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '40px' }} />
              </ComposedChart>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
      
      {/* FINAL KPI FOOTER */}
      <div className="grid gap-6 md:grid-cols-3">
         {[
           { label: "Avg. Session Duration", value: "4m 32s", icon: TrendingUp, color: "text-emerald-500" },
           { label: "Pages per Session", value: "6.8", icon: MousePointer2, color: "text-primary" },
           { label: "Goal Completion", value: "12.4%", icon: TrendingDown, color: "text-rose-500" }
         ].map((kpi, i) => (
           <div key={i} className="p-6 rounded-2xl bg-secondary/10 border border-border/30 flex items-center justify-between group hover:bg-secondary/20 transition-all duration-500">
              <div className="space-y-1">
                 <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.15em] opacity-50">{kpi.label}</span>
                 <div className="text-2xl font-black tracking-tight">{kpi.value}</div>
              </div>
              <kpi.icon className={cn("h-8 w-8 opacity-10 group-hover:opacity-30 transition-opacity", kpi.color)} />
           </div>
         ))}
      </div>
    </div>
  );
}
