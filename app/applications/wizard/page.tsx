"use client";

import * as React from "react";
import { 
  User, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Check,
  Zap,
  Mail,
  Briefcase
} from "lucide-react";

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
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Account", description: "Setup your profile", icon: User },
  { id: 2, title: "Business", description: "Company details", icon: Building2 },
  { id: 3, title: "Review", description: "Final confirmation", icon: CheckCircle2 },
];

export default function WizardPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    company: "",
    role: "",
  });

  const totalSteps = steps.length;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-10 w-full animate-in fade-in duration-700">
      
      {/* STEP INDICATORS */}
      <div className="w-full mb-12">
        <div className="flex justify-between items-start relative px-2">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className={cn(
                "h-10 w-10 rounded-xl flex items-center justify-center border-2 transition-all duration-300",
                currentStep >= step.id 
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-background border-border text-muted-foreground"
              )}>
                {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              <div className="mt-3 text-center">
                 <p className={cn(
                   "text-[10px] font-black uppercase tracking-widest",
                   currentStep >= step.id ? "text-foreground" : "text-muted-foreground/50"
                 )}>{step.title}</p>
              </div>
            </div>
          ))}
          {/* Progress Background Line */}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-border/40 -z-0" />
        </div>
      </div>

      <Card className="w-full border-border/40 shadow-2xl rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
        <div className="h-1.5 w-full bg-secondary/20">
           <Progress value={progress} className="h-full rounded-none bg-transparent transition-all duration-500" />
        </div>
        
        <CardHeader className="p-8 pt-10 text-center">
          <CardTitle className="text-2xl font-black uppercase tracking-tight text-primary">
            {steps[currentStep - 1].title} Setup
          </CardTitle>
          <CardDescription className="text-sm font-medium">
            {steps[currentStep - 1].description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8 pt-0 min-h-[300px] flex flex-col justify-center">
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Username</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input 
                      placeholder="johndoe" 
                      className="pl-10 h-12 rounded-xl"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input 
                      placeholder="john@strix.ui" 
                      className="pl-10 h-12 rounded-xl"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Company Name</Label>
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input 
                      placeholder="Acme Corp" 
                      className="pl-10 h-12 rounded-xl"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Your Role</Label>
                  <div className="relative group">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input 
                      placeholder="CTO, Manager, etc." 
                      className="pl-10 h-12 rounded-xl"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-secondary/10 border border-border/40 space-y-4">
                  <div className="flex justify-between border-b border-border/20 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">User</span>
                    <span className="text-xs font-bold uppercase">{formData.username || "Not set"}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/20 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">Company</span>
                    <span className="text-xs font-bold uppercase">{formData.company || "Not set"}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/20 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">Email</span>
                    <span className="text-xs font-bold lowercase">{formData.email || "Not set"}</span>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium text-center uppercase tracking-widest">
                  By submitting, you agree to our activation terms.
                </p>
              </div>
            )}

          </div>
        </CardContent>

        <CardFooter className="p-8 pt-0 flex justify-between gap-4">
          <Button 
            variant="outline" 
            onClick={handleBack} 
            disabled={currentStep === 1}
            className="h-12 flex-1 rounded-xl font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            onClick={handleNext}
            className="h-12 flex-[2] rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20"
          >
            {currentStep === totalSteps ? "Finish Setup" : "Continue"}
            {currentStep !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-12 flex items-center gap-2 opacity-20">
         <Zap className="h-4 w-4 text-primary fill-primary" />
         <span className="text-[10px] font-black uppercase tracking-[0.3em]">Strix Onboarding Flow</span>
      </div>
    </div>
  );
}
