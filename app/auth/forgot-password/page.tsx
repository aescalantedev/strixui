"use client";

import * as React from "react";
import Link from "next/link";
import { Zap, ArrowLeft, Mail, ArrowRight } from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-muted/30 relative z-[100] font-sans selection:bg-primary/10 selection:text-primary animate-in fade-in duration-500">
      
      {/* FORGOT PASSWORD CARD */}
      <Card className="w-full max-w-[400px] shadow-2xl border-border/50 rounded-2xl bg-card overflow-hidden">
        
        {/* HEADER AREA */}
        <CardHeader className="space-y-4 items-center pt-10 pb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-transform hover:scale-110 duration-300">
            <Zap className="h-7 w-7 text-primary-foreground fill-primary-foreground/20" />
          </div>
          <div className="space-y-1.5 text-center px-6">
            <CardTitle className="text-2xl font-black tracking-tight text-foreground uppercase">
              {isSubmitted ? "Check your email" : "Reset password"}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {isSubmitted 
                ? "We've sent a password reset link to your email address." 
                : "Enter your email address and we'll send you a link to reset your password."}
            </CardDescription>
          </div>
        </CardHeader>
        
        {/* CONTENT AREA */}
        <CardContent className="space-y-6 px-8 pb-8">
          {!isSubmitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                  Email address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    required
                    className="pl-10 h-11 rounded-xl border-border bg-background focus-visible:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-tight text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-2 group">
                Send reset link
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="space-y-4 text-center animate-in zoom-in-95 duration-300">
               <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 text-xs font-medium">
                  If an account exists for that email, you will receive password reset instructions shortly.
               </div>
               <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full h-11 rounded-xl border-border/50 text-[10px] font-black uppercase tracking-widest">
                  Try another email
               </Button>
            </div>
          )}
        </CardContent>

        {/* FOOTER AREA */}
        <CardFooter className="flex justify-center border-t border-border/50 bg-secondary/5 py-8">
          <Link
            href="/auth/login"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-bold transition-all group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
