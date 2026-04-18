import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";

export const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    trend: "up",
    trendValue: "12%",
  },
  {
    title: "Active Users",
    value: "+2350",
    description: "+180.1% from last month",
    trend: "up",
    trendValue: "5.4%",
  },
  {
    title: "Sales Conversion",
    value: "12.5%",
    description: "+19% from last month",
    trend: "up",
    trendValue: "3.2%",
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    description: "-1% from last month",
    trend: "down",
    trendValue: "1.1%",
  },
];

export const performanceData = [
  { month: "Jan", sales: 4000, revenue: 2400 },
  { month: "Feb", sales: 3000, revenue: 1398 },
  { month: "Mar", sales: 2000, revenue: 9800 },
  { month: "Apr", sales: 2780, revenue: 3908 },
  { month: "May", sales: 1890, revenue: 4800 },
  { month: "Jun", sales: 2390, revenue: 3800 },
  { month: "Jul", sales: 3490, revenue: 4300 },
];

export const trafficData = [
  { name: "Direct", value: 400, fill: "var(--color-direct)" },
  { name: "Social", value: 300, fill: "var(--color-social)" },
  { name: "Referral", value: 300, fill: "var(--color-referral)" },
  { name: "Ads", value: 200, fill: "var(--color-ads)" },
];

export const recentTransactions = [
  { id: "TX-9021", customer: "Liam Johnson", amount: "$250.00", status: "Paid", date: "2026-04-16" },
  { id: "TX-9022", customer: "Olivia Smith", amount: "$150.00", status: "Pending", date: "2026-04-16" },
  { id: "TX-9023", customer: "Noah Williams", amount: "$350.00", status: "Paid", date: "2026-04-15" },
  { id: "TX-9024", customer: "Emma Brown", amount: "$450.00", status: "Paid", date: "2026-04-15" },
  { id: "TX-9025", customer: "James Garcia", amount: "$50.00", status: "Failed", date: "2026-04-14" },
];

export const recentActivity = [
  {
    id: 1,
    user: "Liam J.",
    action: "purchased",
    item: "Enterprise Plan",
    time: "2 hours ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    user: "Emma B.",
    action: "opened",
    item: "Support Ticket #402",
    time: "4 hours ago",
    avatar: "https://github.com/nutlope.png",
  },
  {
    id: 3,
    user: "Noah W.",
    action: "upgraded to",
    item: "Pro Monthly",
    time: "6 hours ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    user: "James G.",
    action: "logged in from",
    item: "New Device (Chrome/Mac)",
    time: "1 day ago",
    avatar: "https://github.com/shadcn.png",
  },
];
