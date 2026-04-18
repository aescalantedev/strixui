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

/* --- ANALYTICS SPECIFIC DATA --- */

export const demographicsData = [
  { subject: "18-24", desktop: 120, mobile: 110, fullMark: 150 },
  { subject: "25-34", desktop: 140, mobile: 130, fullMark: 150 },
  { subject: "35-44", desktop: 110, mobile: 150, fullMark: 150 },
  { subject: "45-54", desktop: 99, mobile: 100, fullMark: 150 },
  { subject: "55-64", desktop: 85, mobile: 90, fullMark: 150 },
  { subject: "65+", desktop: 65, mobile: 85, fullMark: 150 },
];

export const weeklyConversionsData = [
  { day: "Mon", direct: 40, social: 24, email: 24 },
  { day: "Tue", direct: 30, social: 13, email: 22 },
  { day: "Wed", direct: 20, social: 38, email: 33 },
  { day: "Thu", direct: 27, social: 39, email: 20 },
  { day: "Fri", direct: 18, social: 48, email: 21 },
  { day: "Sat", direct: 23, social: 38, email: 29 },
  { day: "Sun", direct: 34, social: 43, email: 34 },
];

export const annualTrendData = [
  { month: "Jan", traffic: 4000, bounceRate: 45 },
  { month: "Feb", traffic: 3000, bounceRate: 42 },
  { month: "Mar", traffic: 5000, bounceRate: 38 },
  { month: "Apr", traffic: 4500, bounceRate: 40 },
  { month: "May", traffic: 6000, bounceRate: 35 },
  { month: "Jun", traffic: 5500, bounceRate: 37 },
  { month: "Jul", traffic: 7000, bounceRate: 30 },
  { month: "Aug", traffic: 7500, bounceRate: 28 },
  { month: "Sep", traffic: 6800, bounceRate: 32 },
  { month: "Oct", traffic: 8000, bounceRate: 25 },
  { month: "Nov", traffic: 8500, bounceRate: 22 },
  { month: "Dec", traffic: 9000, bounceRate: 20 },
];
