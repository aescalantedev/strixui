"use client";

import * as React from "react";
import { 
  Trash2, 
  Bell, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  PanelRight,
  Info,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function OverlaysPage() {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">
          Feedback System
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Comprehensive library of modales, alerts, and notifications for Strix UI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* SECTION 1: MODALS & SHEETS */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary/5 border-b border-border/20">
            <CardTitle className="text-lg font-bold tracking-tight text-primary flex items-center gap-2">
               <Copy className="h-5 w-5 text-primary/70" /> Standard Dialog
            </CardTitle>
            <CardDescription className="text-xs font-medium text-muted-foreground">Focused tasks and data entry</CardDescription>
          </CardHeader>
          <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-11 px-8 rounded-xl font-bold text-sm bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                  Open edit profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-xl font-black uppercase tracking-tight">Edit profile</DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Make changes to your public profile. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="modal-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Display Name</Label>
                    <Input id="modal-name" defaultValue="Pedro Duarte" className="h-11 rounded-xl border-border/50 bg-secondary/10" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="modal-username" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Username</Label>
                    <Input id="modal-username" defaultValue="@peduarte" className="h-11 rounded-xl border-border/50 bg-secondary/10" />
                  </div>
                </div>
                <DialogFooter className="pt-4 gap-2">
                  <Button type="submit" className="h-11 px-8 rounded-xl font-bold text-xs uppercase tracking-widest">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary/5 border-b border-border/20">
            <CardTitle className="text-lg font-bold tracking-tight text-destructive flex items-center gap-2">
               <Trash2 className="h-5 w-5 text-destructive/70" /> Alert Dialog
            </CardTitle>
            <CardDescription className="text-xs font-medium text-muted-foreground">Critical action confirmation</CardDescription>
          </CardHeader>
          <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="h-11 px-8 rounded-xl font-bold text-sm shadow-lg shadow-destructive/10 transition-all active:scale-[0.98]">
                  Delete project
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="pb-4">
                  <AlertDialogTitle className="text-xl font-black uppercase tracking-tight text-destructive">Confirm Deletion</AlertDialogTitle>
                  <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed">
                    This action is irreversible. It will permanently remove all your project files and associated data from our systems.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="pt-4 gap-2">
                  <AlertDialogCancel className="h-11 rounded-xl font-bold text-xs uppercase tracking-widest border-border/60">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="h-11 rounded-xl font-bold text-xs uppercase tracking-widest bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete anyway
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary/5 border-b border-border/20">
            <CardTitle className="text-lg font-bold tracking-tight text-primary flex items-center gap-2">
               <PanelRight className="h-5 w-5 text-primary/70" /> Side Panels
            </CardTitle>
            <CardDescription className="text-xs font-medium text-muted-foreground">Quick configuration sheets</CardDescription>
          </CardHeader>
          <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="h-11 px-8 rounded-xl font-bold text-sm border-border/60 hover:bg-secondary/50 transition-all active:scale-[0.98]">
                  Open settings sheet
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                <SheetHeader className="pb-8 border-b border-border/20">
                  <SheetTitle className="text-2xl font-black uppercase tracking-tight text-primary">Quick settings</SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground font-medium">
                    Adjust your preferences without leaving the current view.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 pt-10">
                  <div className="p-6 rounded-2xl bg-secondary/10 border border-border/40 flex items-center justify-between group hover:border-primary/30 transition-colors">
                    <div className="space-y-1">
                       <p className="text-sm font-bold tracking-tight">Push Notifications</p>
                       <p className="text-xs text-muted-foreground font-medium">Receive real-time alerts</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/10 border border-border/40 flex items-center justify-between group hover:border-primary/30 transition-colors">
                    <div className="space-y-1">
                       <p className="text-sm font-bold tracking-tight">System theme sync</p>
                       <p className="text-xs text-muted-foreground font-medium">Match OS preferences</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* SECTION 2: INLINE ALERTS */}
        <div className="col-span-full space-y-4">
          <p className="text-sm font-black text-muted-foreground uppercase tracking-widest ml-1">Inline Alerts</p>
          <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
            <CardContent className="flex flex-col gap-4 p-8">
              <Alert className="rounded-2xl border-border/50 bg-secondary/5">
                <Info className="h-4 w-4" />
                <AlertTitle>System Update</AlertTitle>
                <AlertDescription>A new software update is available. Please restart your application to apply changes.</AlertDescription>
              </Alert>
              
              <Alert className="rounded-2xl border-emerald-500/20 bg-emerald-500/5 text-emerald-600 [&>svg]:text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Profile Updated</AlertTitle>
                <AlertDescription>Your profile has been successfully updated. All changes are now live.</AlertDescription>
              </Alert>
              
              <Alert className="rounded-2xl border-orange-500/20 bg-orange-500/5 text-orange-600 [&>svg]:text-orange-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Subscription Warning</AlertTitle>
                <AlertDescription>Your subscription is expiring in 3 days. Please renew to avoid service interruption.</AlertDescription>
              </Alert>
              
              <Alert variant="destructive" className="rounded-2xl border-destructive/20 bg-destructive/5 shadow-none">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Database Error</AlertTitle>
                <AlertDescription>Failed to connect to the database. Please check your network settings and try again.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 3: TOAST SYSTEM EXPANDED */}
        <div className="col-span-full space-y-4">
           <p className="text-sm font-black text-muted-foreground uppercase tracking-widest ml-1">Notification System</p>
           <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
             <CardHeader className="bg-secondary/5 border-b border-border/20">
               <CardTitle className="text-lg font-bold tracking-tight text-primary flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary/70" /> Toast Notifications
               </CardTitle>
               <CardDescription className="text-xs font-medium text-muted-foreground">Unobtrusive real-time feedback using Sonner</CardDescription>
             </CardHeader>
             <CardContent className="p-8">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-12 rounded-xl font-bold text-xs uppercase tracking-widest border-border/60 hover:bg-secondary/50 transition-all active:scale-[0.98]"
                    onClick={() => toast("Notification", {
                      description: "Meeting added to your calendar successfully.",
                    })}
                  >
                    Default Toast
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 rounded-xl font-bold text-xs uppercase tracking-widest border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/5 hover:border-emerald-500/40 transition-all active:scale-[0.98]"
                    onClick={() => toast.success("Action completed!", {
                      description: "Changes have been saved to the cloud.",
                    })}
                  >
                    Success Toast
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 rounded-xl font-bold text-xs uppercase tracking-widest border-orange-500/20 text-orange-600 hover:bg-orange-500/5 hover:border-orange-500/40 transition-all active:scale-[0.98]"
                    onClick={() => toast.warning("Approaching limit", {
                      description: "You are at 90% of your current storage capacity.",
                    })}
                  >
                    Warning Toast
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 rounded-xl font-bold text-xs uppercase tracking-widest border-destructive/20 text-destructive hover:bg-destructive/5 hover:border-destructive/40 transition-all active:scale-[0.98]"
                    onClick={() => toast.error("System Error", {
                      description: "Failed to save changes. Please try again.",
                    })}
                  >
                    Error Toast
                  </Button>
               </div>
             </CardContent>
           </Card>
        </div>

      </div>
    </div>
  );
}
