"use client";

import * as React from "react";
import { 
  Mail, 
  Search, 
  Check, 
  ChevronsUpDown, 
  Plus, 
  Minus, 
  DollarSign, 
} from "lucide-react";

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
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function FormsPage() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [stepValue, setStepValue] = React.useState(10);

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
          Forms & Inputs
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Comprehensive collection of input components and form layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SECTION 1: BASIC INPUTS */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight text-primary">Basic Inputs</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Standard input variations</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-4 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Default Input</Label>
              <Input placeholder="Enter text..." className="rounded-xl border-border/50 h-11" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">With Icon</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input placeholder="email@example.com" className="pl-10 rounded-xl border-border/50 h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Disabled State</Label>
              <Input disabled placeholder="Cannot edit this" className="rounded-xl border-border/50 h-11 opacity-50 cursor-not-allowed bg-secondary/10" />
            </div>

            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-destructive">Error State</Label>
              <Input placeholder="Invalid value" className="rounded-xl border-destructive/50 h-11 bg-destructive/5 focus-visible:ring-destructive" />
              <p className="text-[0.8rem] font-medium text-destructive mt-2">Please enter a valid email address.</p>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 2: FLOATING LABELS (FIXED) */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight text-primary">Floating Labels</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">High-end interactive fields</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-4 space-y-8 py-10">
            <div className="relative">
              <Input 
                id="floating-name"
                className="peer h-12 pt-5 pb-1 rounded-xl border-border/50 focus-visible:ring-primary/20 placeholder-transparent"
                placeholder=" "
              />
              <Label 
                htmlFor="floating-name"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-primary pointer-events-none bg-background px-1"
              >
                Full Name
              </Label>
            </div>

            <div className="relative">
              <Input 
                id="floating-token"
                type="password"
                className="peer h-12 pt-5 pb-1 rounded-xl border-border/50 focus-visible:ring-primary/20 placeholder-transparent"
                placeholder=" "
              />
              <Label 
                htmlFor="floating-token"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-primary pointer-events-none bg-background px-1"
              >
                Access Token
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 3: SELECTION & PICKERS */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight text-primary">Selection & Pickers</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Advanced list selection</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-4 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Standard Select</Label>
              <Select>
                <SelectTrigger className="rounded-xl border-border/50 h-11">
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow-xl">
                  <SelectItem value="pro">Professional</SelectItem>
                  <SelectItem value="ent">Enterprise</SelectItem>
                  <SelectItem value="free">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Combobox (Searchable)</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-full justify-between rounded-xl border-border/50 h-11 text-muted-foreground font-normal"
                  >
                    {value
                      ? frameworks.find((f) => f.value === value)?.label
                      : "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 rounded-xl shadow-2xl border-border/40">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((f) => (
                          <CommandItem
                            key={f.value}
                            value={f.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setOpen(false);
                            }}
                            className="rounded-lg cursor-pointer"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4 text-primary",
                                value === f.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {f.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 4: NUMBERS & SPECIALIZED */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight text-primary">Specialized Inputs</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Masks and numerical controls</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-4 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Number Stepper</Label>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-xl h-11 w-11 shrink-0 border-border/50"
                  onClick={() => setStepValue(v => Math.max(0, v - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input 
                  type="number" 
                  value={stepValue}
                  className="rounded-xl border-border/50 h-11 text-center font-black text-lg" 
                  readOnly
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-xl h-11 w-11 shrink-0 border-border/50"
                  onClick={() => setStepValue(v => v + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Currency Input</Label>
              <div className="relative group">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input type="number" placeholder="0.00" className="pl-10 pr-12 rounded-xl border-border/50 h-11 font-bold" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-muted-foreground uppercase opacity-50">USD</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 5: CHECKBOXES, RADIOS & SWITCHES */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden lg:col-span-2">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-lg font-black uppercase tracking-tight text-primary">Selection Controls</CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-widest opacity-60">Toggles and groups</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-4">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Switches</Label>
                  <div className="flex flex-col gap-4">
                     <div className="flex items-center space-x-2">
                        <Switch id="push-notif" className="data-[state=checked]:bg-primary" />
                        <Label htmlFor="push-notif" className="text-sm font-medium">Push Notifications</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Switch id="auto-save" className="data-[state=checked]:bg-primary" />
                        <Label htmlFor="auto-save" className="text-sm font-medium">Autosave Cloud</Label>
                     </div>
                  </div>
               </div>

               <div className="space-y-4">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Radio Group</Label>
                  <RadioGroup defaultValue="standard" className="gap-3">
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="st" />
                        <Label htmlFor="st" className="text-sm font-medium cursor-pointer">Standard Delivery</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="ex" />
                        <Label htmlFor="ex" className="text-sm font-medium cursor-pointer">Express Priority</Label>
                     </div>
                  </RadioGroup>
               </div>

               <div className="space-y-4">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Checkboxes</Label>
                  <div className="space-y-3">
                     {["Accept Terms", "Marketing Email", "Beta Access"].map((label, i) => (
                       <div key={i} className="flex items-center space-x-2 cursor-pointer group">
                          <Checkbox id={`cb${i}`} className="rounded-sm border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor={`cb${i}`} className="text-sm font-medium cursor-pointer group-hover:text-primary transition-colors">{label}</Label>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
