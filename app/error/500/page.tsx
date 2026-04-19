"use client";

import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error500Page() {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center p-6 font-sans selection:bg-primary/10 selection:text-primary">
      
      {/* BRANDING LOGO (SUTILE) */}
      <div className="absolute top-10 flex items-center justify-center w-full pointer-events-none opacity-20">
         <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-foreground rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Strix UI</span>
            <div className="h-1 w-8 bg-foreground rounded-full" />
         </div>
      </div>

      <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* STEP 2: SOLID 500 PROTAGONIST */}
        <h1 className="text-8xl md:text-[12rem] font-extrabold tracking-tighter text-primary leading-none select-none drop-shadow-sm">
          500
        </h1>

        {/* STEP 3: REFINED TYPOGRAPHY */}
        <div className="space-y-2 mt-4 px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
            Internal server error
          </h2>
          <p className="text-muted-foreground text-center max-w-[500px] font-medium leading-relaxed mx-auto">
            Oops, something went wrong on our end. We are currently trying to fix the problem. Please try again later.
          </p>
        </div>

        {/* STEP 4: CLEAN ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Button 
            onClick={() => window.location.reload()}
            className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98] group"
          >
            <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
            Try again
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="h-12 px-8 rounded-2xl border-border/60 hover:bg-secondary/50 font-bold text-sm transition-all active:scale-[0.98]"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to dashboard
            </Link>
          </Button>
        </div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute bottom-10 opacity-10 pointer-events-none flex gap-4">
         {[1, 2, 3].map((i) => (
           <div key={i} className="h-2 w-2 rounded-full bg-foreground" />
         ))}
      </div>
    </div>
  );
}
