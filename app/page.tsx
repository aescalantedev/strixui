import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  BarChart3
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
    trend: "up",
    trendValue: "12%",
    color: "text-emerald-500",
  },
  {
    title: "Active Users",
    value: "+2350",
    description: "+180.1% from last month",
    icon: Users,
    trend: "up",
    trendValue: "5.4%",
    color: "text-emerald-500",
  },
  {
    title: "Sales Conversion",
    value: "12.5%",
    description: "+19% from last month",
    icon: TrendingUp,
    trend: "up",
    trendValue: "3.2%",
    color: "text-emerald-500",
  },
  {
    title: "Active Sessions",
    value: "573",
    description: "-4% from last month",
    icon: Activity,
    trend: "down",
    trendValue: "2.1%",
    color: "text-rose-500",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-700 w-full h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here is what's happening with your business today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl shadow-sm h-10 px-4 border-border/50">
            Download Report
          </Button>
          <Button className="rounded-xl shadow-sm h-10 px-4 bg-primary hover:bg-primary/90">
            Create New
          </Button>
        </div>
      </div>

      {/* KPI Grid - FLUIDO */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <div className="h-8 w-8 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`flex items-center text-xs font-medium ${kpi.color}`}>
                  {kpi.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                  )}
                  {kpi.trendValue}
                </span>
                <p className="text-xs text-muted-foreground">
                  vs last month
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area - FLUIDO */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 w-full">
        <Card className="col-span-4 border-border/50 shadow-sm rounded-xl overflow-hidden">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-1">
              <CardTitle>Analytics Performance</CardTitle>
              <CardDescription>
                A visual representation of your traffic and engagement.
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto rounded-full">
               <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[450px] w-full bg-secondary/20 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
               <div className="flex flex-col items-center gap-2 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                 <BarChart3 className="h-10 w-10 mb-2 stroke-[1.5]" />
                 <p className="font-medium">Charts Placeholder</p>
                 <p className="text-xs">Select data range to visualize</p>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar del dashboard / Recent Activity */}
        <Card className="col-span-3 border-border/50 shadow-sm rounded-xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              You have 12 new notifications this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
                    {i}
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">
                      New subscription plan purchased
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2 hours ago — <span className="text-primary font-medium">Enterprise</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-8 text-xs text-muted-foreground hover:text-primary rounded-lg border border-transparent hover:border-border/50 transition-all">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
