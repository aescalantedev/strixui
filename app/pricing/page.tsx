"use client";

import * as React from "react";
import { Check, Zap, Star, ShieldCheck } from "lucide-react";

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Hobby",
    price: { monthly: "$0", yearly: "$0" },
    description: "Perfect for side projects and individual developers.",
    features: [
      "Up to 3 projects",
      "Standard Analytics",
      "Community Support",
      "1GB Storage",
    ],
    buttonText: "Start for free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: "$19", yearly: "$15" },
    description: "Advanced features for growing teams and startups.",
    features: [
      "Unlimited projects",
      "Advanced AI Insights",
      "Priority Email Support",
      "50GB Storage",
      "Custom Domains",
      "Team Collaboration",
    ],
    buttonText: "Get Started Pro",
    variant: "default" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "$49", yearly: "$39" },
    description: "Global scale performance and security for large corps.",
    features: [
      "Dedicated Infrastructure",
      "24/7 Phone Support",
      "SLA Guarantees",
      "Unlimited Storage",
      "Custom Contracts",
      "Audit Logs",
    ],
    buttonText: "Contact Sales",
    variant: "outline" as const,
    highlight: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <div className="w-full flex flex-col items-center py-12 px-6 font-sans selection:bg-primary/10 selection:text-primary animate-in fade-in duration-700">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />

      {/* HEADER SECTION */}
      <div className="relative z-10 text-center space-y-6 max-w-[800px] animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex justify-center">
           <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
              Simple & Transparent
           </Badge>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase leading-none">
            Ready to scale your <span className="text-primary">Business?</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-[600px] mx-auto">
            Choose the plan that's right for you. Change or cancel at any time.
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex justify-center pt-8">
          <Tabs 
            defaultValue="monthly" 
            onValueChange={(v) => setBillingCycle(v as any)}
            className="w-[200px]"
          >
            <TabsList className="grid w-full grid-cols-2 rounded-xl bg-secondary/50 p-1 border border-border/50">
              <TabsTrigger value="monthly" className="rounded-lg text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="rounded-lg text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-7xl w-full relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name}
            className={cn(
              "relative flex flex-col border-border/40 shadow-xl rounded-[2rem] transition-all duration-300 hover:shadow-2xl",
              plan.highlight ? "border-primary/50 shadow-primary/5 scale-105 z-20 bg-card" : "bg-card/50 backdrop-blur-sm"
            )}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-black uppercase tracking-widest text-[9px] rounded-full px-4 border-none shadow-lg shadow-primary/20">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-black uppercase tracking-tight">{plan.name}</CardTitle>
                  <CardDescription className="text-xs font-medium leading-relaxed">{plan.description}</CardDescription>
                </div>
                {plan.name === "Pro" && <Zap className="h-6 w-6 text-primary fill-primary/20" />}
                {plan.name === "Enterprise" && <ShieldCheck className="h-6 w-6 text-muted-foreground opacity-50" />}
              </div>
              <div className="pt-6 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                </span>
                <span className="text-muted-foreground font-bold text-sm">/mo</span>
              </div>
              {billingCycle === "yearly" && (
                <p className="text-[10px] font-black text-emerald-500 uppercase mt-2">Billed annually ($180/yr)</p>
              )}
            </CardHeader>

            <CardContent className="flex-1 p-8 pt-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <Check className="h-3 w-3 text-primary stroke-[3]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-8 pt-4">
              <Button 
                variant={plan.variant} 
                className={cn(
                  "w-full h-12 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-sm transition-all active:scale-[0.98]",
                  plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20" : "border-border/60 hover:bg-secondary/50"
                )}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* TRUST FOOTER */}
      <div className="mt-20 text-center space-y-4 opacity-40 animate-in fade-in duration-1000 delay-500">
         <p className="text-[10px] font-black uppercase tracking-[0.4em]">Trusted by the world's most innovative teams</p>
         <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale brightness-0 invert-0">
            <span className="text-lg font-black tracking-tighter uppercase italic">Vercel</span>
            <span className="text-lg font-black tracking-tighter uppercase italic">Stripe</span>
            <span className="text-lg font-black tracking-tighter uppercase italic">Linear</span>
            <span className="text-lg font-black tracking-tighter uppercase italic">GitHub</span>
         </div>
      </div>

    </div>
  );
}
