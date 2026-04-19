"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error404Page() {
  const router = useRouter();

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
        
        {/* STEP 2: SOLID 404 PROTAGONIST */}
        <h1 className="text-8xl md:text-[10rem] font-extrabold tracking-tighter text-primary leading-none select-none drop-shadow-sm">
          404
        </h1>

        {/* STEP 3: REFINED TYPOGRAPHY */}
        <div className="space-y-2 mt-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
            Page not found
          </h2>
          <p className="text-muted-foreground text-center max-w-[500px] font-medium leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or didn't exist in the first place.
          </p>
        </div>

        {/* STEP 4: CLEAN ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Button 
            asChild
            className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to dashboard
            </Link>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="h-12 px-8 rounded-2xl border-border/60 hover:bg-secondary/50 font-bold text-sm transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </div>
      </div>

      {/* DECORATIVE DOTS */}
      <div className="absolute bottom-10 opacity-10 pointer-events-none">
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
          <circle cx="50" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
