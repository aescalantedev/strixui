"use client";

import * as React from "react";
import { 
  Wallet, 
  Target, 
  ArrowRight, 
  MoreHorizontal, 
  Plus, 
  ArrowUp, 
  ArrowDown,
  CreditCard,
  TrendingUp
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  Cell, 
  Label,
  AreaChart,
  Area,
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
import { Badge } from "@/components/ui/badge";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

import { 
  balanceHistory, 
  cashFlowData, 
  expenseAllocation, 
  upcomingSubscriptions 
} from "@/lib/mock-finance";
import { cn } from "@/lib/utils";

const totalExpenses = expenseAllocation.reduce((acc, curr) => acc + curr.value, 0);

export default function FinancePage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-screen bg-background" />;
  }

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10">
      
      {/* SECTION A: PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
            Finance & Wealth
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Manage your assets, track liquidity and plan your savings.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-border/50 shadow-sm h-10 gap-2 text-[10px] font-black uppercase tracking-widest px-4">
            Accounts
          </Button>
          <Button className="rounded-xl shadow-sm h-10 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-[0.1em] px-5 transition-all active:scale-95">
            <Plus className="h-3.5 w-3.5" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* SECTION B: LIQUIDITY KPIs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden relative group min-w-0">
          <div className="absolute inset-x-0 bottom-0 h-12 opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceHistory}>
                   <Area type="monotone" dataKey="balance" stroke="var(--primary)" fill="var(--primary)" strokeWidth={2} />
                </AreaChart>
             </ResponsiveContainer>
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight">$54,230.00</div>
            <div className="flex items-center gap-1.5 mt-1">
               <span className="text-emerald-500 text-[10px] font-bold">+4.5%</span>
               <span className="text-[10px] text-muted-foreground font-medium uppercase opacity-50">last 7 days</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden min-w-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Monthly Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-foreground">$12,450.00</div>
            <Badge className="mt-2 bg-emerald-500/10 text-emerald-600 border-none text-[8px] font-black uppercase tracking-tighter">
               +12.4% from April
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden min-w-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Monthly Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-foreground">$4,820.00</div>
            <Badge className="mt-2 bg-rose-500/10 text-rose-600 border-none text-[8px] font-black uppercase tracking-tighter">
               -2.1% from April
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden min-w-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Savings Target</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-black tracking-tight text-foreground">75%</div>
            <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
               <div className="bg-primary h-full w-[75%] rounded-full shadow-[0_0_10px_rgba(var(--primary),0.4)]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SECTION C: CASH FLOW STRATEGY (SLIM BARS) */}
      <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden min-w-0">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-xl font-black uppercase tracking-tight">Cash Flow Strategy</CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase tracking-widest opacity-60">Revenue vs Expenditures monthly breakdown</CardDescription>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Income</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Expenses</span>
             </div>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:px-6 h-[400px]">
          <ChartContainer 
            config={{
              income: { label: "Income", color: "var(--primary)" },
              expenses: { label: "Expenses", color: "var(--muted-foreground)" }
            }}
            className="h-full w-full"
          >
            <BarChart data={cashFlowData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }} barGap={12}>
              <CartesianGrid vertical={false} strokeDasharray="4" strokeOpacity={0.08} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontWeight: 800 }} tickFormatter={(val) => `$${val/1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="income" fill="var(--primary)" radius={[6, 6, 0, 0]} barSize={20} />
              <Bar dataKey="expenses" fill="var(--muted-foreground)" fillOpacity={0.2} radius={[6, 6, 0, 0]} barSize={20} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* SECTION D: ALLOCATION & SUBSCRIPTIONS (DYNAMIC DONUT) */}
      <div className="grid gap-6 lg:grid-cols-12">
        
        <Card className="lg:col-span-4 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col min-w-0">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Expense Allocation</CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Category breakdown</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-6">
            <div className="h-[280px] w-full">
               <ChartContainer
                  config={{
                     salaries: { label: "Salaries", color: "var(--primary)" },
                     software: { label: "Software", color: "var(--chart-2)" },
                     marketing: { label: "Marketing", color: "var(--chart-3)" },
                     office: { label: "Office", color: "var(--chart-4)" },
                  }}
                  className="h-full w-full"
               >
                  <PieChart>
                     <Pie
                        data={expenseAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={75}
                        outerRadius={95}
                        paddingAngle={10}
                        dataKey="value"
                        nameKey="name"
                     >
                        {expenseAllocation.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.fill} stroke="transparent" />
                        ))}
                        <Label
                           content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                 return (
                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                       <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-black tracking-tighter">
                                          ${(totalExpenses/1000).toFixed(1)}k
                                       </tspan>
                                       <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 22} className="fill-muted-foreground text-[9px] font-black uppercase tracking-[0.2em] opacity-60">
                                          Total Monthly
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
            </div>
            <div className="space-y-3 mt-6">
               {expenseAllocation.map((item) => (
                 <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
                       <span className="text-[10px] font-bold text-foreground opacity-80">{item.label}</span>
                    </div>
                    <span className="text-[10px] font-black text-muted-foreground">${item.value}</span>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-8 border-border/40 shadow-sm rounded-2xl overflow-hidden flex flex-col min-w-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg font-black uppercase tracking-tight">Upcoming Subscriptions</CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-widest opacity-60">Auto-payments scheduled for May</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8"><MoreHorizontal className="h-4 w-4 text-muted-foreground" /></Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
               {upcomingSubscriptions.map((sub) => (
                 <div key={sub.id} className="flex items-center justify-between p-4 rounded-xl border border-border/20 hover:bg-secondary/20 transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors text-muted-foreground group-hover:text-primary">
                          <CreditCard className="h-5 w-5" />
                       </div>
                       <div className="space-y-0.5">
                          <p className="text-sm font-black uppercase tracking-tight">{sub.name}</p>
                          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest opacity-60">{sub.provider} — {sub.date}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-sm font-black tracking-tight">{sub.amount}</div>
                       <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-4 w-4" />
                       </Button>
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between group">
               <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-primary animate-bounce-slow" />
                  <p className="text-xs font-bold text-foreground">Next optimized strategy ready: <span className="text-primary underline cursor-pointer hover:text-primary/80">Consolidate Cloud Costs</span></p>
               </div>
               <Badge className="bg-primary text-primary-foreground border-none text-[8px] font-black uppercase px-2 py-1">NEW INSIGHT</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
