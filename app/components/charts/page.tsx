"use client";

import * as React from "react";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart as PieChartIcon, 
  LineChart as LineChartIcon, 
  Activity, 
  Zap,
  MousePointer2
} from "lucide-react";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Line, 
  LineChart, 
  Pie, 
  PieChart, 
  Cell, 
  Label,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  XAxis, 
  YAxis, 
  ResponsiveContainer 
} from "recharts";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

// --- MOCK DATA FOR SHOWROOM ---

const areaData = [
  { month: "Jan", value: 100 }, { month: "Feb", value: 180 }, { month: "Mar", value: 150 },
  { month: "Apr", value: 240 }, { month: "May", value: 200 }, { month: "Jun", value: 280 },
];

const barData = [
  { month: "Jan", income: 450, expenses: 300 },
  { month: "Feb", income: 520, expenses: 380 },
  { month: "Mar", income: 480, expenses: 410 },
  { month: "Apr", income: 610, expenses: 320 },
];

const lineData = [
  { time: "9am", users: 120 }, { time: "12pm", users: 450 }, { time: "3pm", users: 380 },
  { time: "6pm", users: 800 }, { time: "9pm", users: 650 },
];

const pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
];

const radarData = [
  { subject: "Speed", A: 120, B: 110 },
  { subject: "Security", A: 98, B: 130 },
  { subject: "Design", A: 86, B: 130 },
  { subject: "UX", A: 99, B: 100 },
  { subject: "SEO", A: 85, B: 90 },
];

const radialData = [
  { activity: "running", value: 275, fill: "var(--color-running)" },
  { activity: "cycling", value: 200, fill: "var(--color-cycling)" },
  { activity: "swimming", value: 187, fill: "var(--color-swimming)" },
];

export default function ChartsShowroomPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-screen bg-background" />;
  }

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
          Charts & Visualizations
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Stunning, interactive data visualizations powered by Recharts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. AREA CHART - GRADIENT */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <TrendingUp className="h-5 w-5 text-primary" />
               Area Chart - Gradient
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Smooth monotone area with depth</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer config={{ value: { label: "Growth", color: "var(--primary)" } }} className="h-full w-full">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeOpacity={0.08} strokeDasharray="3 3" />
                <XAxis dataKey="month" hide />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <Area type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#chartGradient)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 2. BAR CHART - MULTIPLE */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <BarChart3 className="h-5 w-5 text-primary" />
               Bar Chart - Multiple
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Grouped comparisons by category</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer config={{ income: { label: "Income", color: "var(--primary)" }, expenses: { label: "Expenses", color: "var(--chart-2)" } }} className="h-full w-full">
              <BarChart data={barData} barGap={8}>
                <CartesianGrid vertical={false} strokeOpacity={0.08} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="income" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 3. LINE CHART - DOTS */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <LineChartIcon className="h-5 w-5 text-primary" />
               Line Chart - Dots
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Traffic monitoring with nodes</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer config={{ users: { label: "Users", color: "var(--primary)" } }} className="h-full w-full">
              <LineChart data={lineData} margin={{ left: 10, right: 10 }}>
                <CartesianGrid vertical={false} strokeOpacity={0.08} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="var(--primary)" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: "var(--primary)", strokeWidth: 2, stroke: "var(--background)" }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 4. DONUT CHART - CENTRAL LABEL */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <PieChartIcon className="h-5 w-5 text-primary" />
               Donut Chart
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Browser market distribution</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer 
              config={{
                chrome: { label: "Chrome", color: "var(--chart-1)" },
                safari: { label: "Safari", color: "var(--chart-2)" },
                firefox: { label: "Firefox", color: "var(--chart-3)" },
                edge: { label: "Edge", color: "var(--chart-4)" },
              }}
              className="h-full w-full"
            >
              <PieChart>
                <Pie data={pieData} dataKey="visitors" innerRadius={60} outerRadius={85} paddingAngle={5}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} stroke="transparent" />
                  ))}
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-black">835</tspan>
                            <tspan x={viewBox.cx} y={viewBox.cy + 20} className="fill-muted-foreground text-[10px] font-bold uppercase tracking-widest">Total</tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 5. RADAR CHART */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <Activity className="h-5 w-5 text-primary" />
               Radar Chart
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Product performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4 flex items-center justify-center">
            <ChartContainer config={{ A: { label: "Product A", color: "var(--primary)" }, B: { label: "Product B", color: "var(--chart-2)" } }} className="h-full w-full">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid strokeOpacity={0.1} />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700 }} />
                <Radar name="Product A" dataKey="A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.4} />
                <Radar name="Product B" dataKey="B" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.4} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 6. RADIAL BAR CHART */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
               <Zap className="h-5 w-5 text-primary" />
               Radial Bar Chart
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Goal completion tracking</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer 
              config={{
                running: { label: "Running", color: "var(--chart-1)" },
                cycling: { label: "Cycling", color: "var(--chart-2)" },
                swimming: { label: "Swimming", color: "var(--chart-3)" },
              }}
              className="h-full w-full"
            >
              <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={radialData}>
                <RadialBar background dataKey="value" cornerRadius={5} />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
