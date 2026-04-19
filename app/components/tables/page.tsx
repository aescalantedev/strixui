"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { 
  ArrowUpDown, 
  ChevronDown, 
  MoreHorizontal, 
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  ChevronFirst,
  ChevronLast,
  Edit,
  Trash2,
  ExternalLink,
  Server
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// --- MOCK DATA ---
const minimalInvoices = [
  { inv: "#INV-001", client: "Vercel Inc.", amount: "$1,200.00" },
  { inv: "#INV-002", client: "Stripe", amount: "$850.50" },
  { inv: "#INV-003", client: "Linear", amount: "$3,400.00" },
];

const serverStatus = [
  { name: "Production-01", region: "US-East", uptime: "99.9%", status: "online" },
  { name: "Staging-DB", region: "EU-West", uptime: "98.2%", status: "online" },
  { name: "Backup-Node", region: "ASIA-South", uptime: "100%", status: "offline" },
];

const teamMembers = [
  { name: "Alex Rivera", email: "alex@strix.ui", role: "Admin", status: "Active", avatar: "https://github.com/shadcn.png" },
  { name: "Sarah Jenkins", email: "sarah@strix.ui", role: "Editor", status: "Active", avatar: "https://github.com/nutlope.png" },
  { name: "Marcus Chen", email: "marcus@strix.ui", role: "Viewer", status: "Inactive", avatar: "" },
];

type Payment = { id: string; amount: number; status: "success" | "pending" | "failed"; email: string; };
const advancedData: Payment[] = Array.from({ length: 25 }, (_, i) => ({
  id: `TX-${1000 + i}`,
  amount: Math.floor(Math.random() * 1000) + 50,
  status: ["success", "pending", "failed"][Math.floor(Math.random() * 3)] as any,
  email: `user${i + 1}@strix-ui.io`,
}));

// --- COLUMNS FOR TANSTACK ---
const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="rounded-sm border-muted-foreground/30"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        className="rounded-sm border-muted-foreground/30"
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge className={cn(
        "rounded-md px-2 py-0.5 text-[10px] font-black uppercase border-none shadow-none",
        row.getValue("status") === "success" ? "bg-emerald-500/10 text-emerald-600" : 
        row.getValue("status") === "pending" ? "bg-orange-500/10 text-orange-600" : "bg-rose-500/10 text-rose-600"
      )}>
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="font-bold text-sm tracking-tight">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right font-black text-[9px] uppercase tracking-widest opacity-50">Amount</div>,
    cell: ({ row }) => <div className="text-right font-black text-sm tracking-tight">${row.getValue("amount")}</div>,
  },
];

export default function TablesPage() {
  const table = useReactTable({
    data: advancedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  return (
    <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
          Advanced Table Gallery
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          Comprehensive data visualization components for any SaaS use case.
        </p>
      </div>

      {/* ROW 1: BASIC TABLES */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Minimal Table */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary/5 border-b border-border/20">
             <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">Minimal Table</CardTitle>
             <CardDescription className="text-xs font-medium uppercase tracking-tighter opacity-60">Clean row design</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                {minimalInvoices.map((row) => (
                  <TableRow key={row.inv} className="hover:bg-muted/30 border-b border-border/10 last:border-0 h-14">
                    <TableCell className="px-6 font-bold text-xs">{row.inv}</TableCell>
                    <TableCell className="font-bold text-xs text-muted-foreground uppercase tracking-widest">{row.client}</TableCell>
                    <TableCell className="text-right px-6 font-black text-sm">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Striped Table */}
        <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary/5 border-b border-border/20">
             <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">Striped Zebra</CardTitle>
             <CardDescription className="text-xs font-medium uppercase tracking-tighter opacity-60">Structured layout</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-4">
             <div className="rounded-xl border border-border/50 overflow-hidden">
                <Table>
                  <TableHeader className="bg-secondary/30">
                    <TableRow className="hover:bg-transparent border-border/50">
                      <TableHead className="font-black text-[10px] uppercase tracking-widest">Node</TableHead>
                      <TableHead className="font-black text-[10px] uppercase tracking-widest">Region</TableHead>
                      <TableHead className="font-black text-[10px] uppercase tracking-widest text-right">Uptime</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {serverStatus.map((row, i) => (
                      <TableRow key={row.name} className={cn(
                        "h-12 border-border/30 hover:bg-transparent",
                        i % 2 === 1 && "bg-secondary/20"
                      )}>
                        <TableCell className="font-black text-xs flex items-center gap-2">
                           <Server className="h-3 w-3 text-primary" /> {row.name}
                        </TableCell>
                        <TableCell className="text-[10px] font-black uppercase opacity-60">{row.region}</TableCell>
                        <TableCell className="text-right font-black text-emerald-500">{row.uptime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* ROW 2: ADVANCED TANSTACK */}
      <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
        <CardHeader className="bg-secondary/5 border-b border-border/20">
          <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">Advanced Engine (TanStack)</CardTitle>
          <CardDescription className="text-xs font-medium uppercase tracking-tighter opacity-60">Full interactive capabilities</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-secondary/20 border-none">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-none hover:bg-transparent h-12">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="px-6 font-black text-[9px] uppercase tracking-widest opacity-50">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="hover:bg-muted/50 transition-colors border-border/30 h-14">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-6">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ROW 3: TEAM TABLE */}
      <Card className="border-border/40 shadow-sm rounded-2xl overflow-hidden">
        <CardHeader className="bg-secondary/5 border-b border-border/20">
          <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">Team Management (Rich UI)</CardTitle>
          <CardDescription className="text-xs font-medium uppercase tracking-tighter opacity-60">High density profile rows</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.email} className="hover:bg-muted/50 h-16 border-border/20 last:border-0">
                  <TableCell className="px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-primary/5 text-primary text-[10px] font-black">{member.name.substring(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm tracking-tight">{member.name}</span>
                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter opacity-60">{member.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "rounded-lg px-2 text-[9px] font-black uppercase tracking-tighter border-none shadow-none",
                      member.role === "Admin" ? "bg-primary/10 text-primary" : "bg-blue-500/10 text-blue-600"
                    )}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <div className={cn("h-1.5 w-1.5 rounded-full", member.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-muted-foreground/30")} />
                       <span className="text-[10px] font-bold uppercase tracking-wider">{member.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right px-6">
                     <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"><Edit className="h-3.5 w-3.5" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-rose-500/5 hover:text-rose-500 transition-colors"><Trash2 className="h-3.5 w-3.5" /></Button>
                     </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ROW 4: PAGINATION SHOWROOM */}
      <div className="space-y-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50 ml-1">Pagination Styles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <Card className="border-border/40 shadow-sm rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-60">Minimalist</p>
             <div className="flex items-center justify-between w-full">
                <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest gap-2 hover:bg-primary/5 hover:text-primary rounded-xl px-4">
                  <ChevronLeft className="h-3 w-3" /> Prev
                </Button>
                <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest gap-2 hover:bg-primary/5 hover:text-primary rounded-xl px-4">
                  Next <ChevronRight className="h-3 w-3" />
                </Button>
             </div>
          </Card>

          <Card className="border-border/40 shadow-sm rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-60">Numbered</p>
             <div className="flex items-center justify-center gap-1.5">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-border/50"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="default" size="sm" className="h-8 w-8 p-0 rounded-lg shadow-sm font-black text-xs bg-primary text-primary-foreground">1</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg font-bold text-xs">2</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg font-bold text-xs opacity-50">...</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg font-bold text-xs">12</Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-border/50"><ChevronRight className="h-4 w-4" /></Button>
             </div>
          </Card>

          <Card className="border-border/40 shadow-sm rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-60">Enterprise</p>
             <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-muted-foreground opacity-40 uppercase tracking-widest">1-5 of 100</span>
                <div className="flex items-center gap-1">
                   <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-border/50 text-muted-foreground/50"><ChevronFirst className="h-3.5 w-3.5" /></Button>
                   <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-border/50 text-muted-foreground/50"><ChevronLeft className="h-3.5 w-3.5" /></Button>
                   <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-border/50 text-muted-foreground/50"><ChevronRight className="h-3.5 w-3.5" /></Button>
                   <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-border/50 text-muted-foreground/50"><ChevronLast className="h-3.5 w-3.5" /></Button>
                </div>
             </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
