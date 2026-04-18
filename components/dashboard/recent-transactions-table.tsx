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
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Search,
  ArrowUpDown,
  Download,
  Trash2,
  ExternalLink,
  Filter
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Definición del Tipo de Dato
export type Transaction = {
  id: string;
  customer: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  date: string;
};

// Columnas de la Tabla
const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent p-0 font-bold text-[10px] uppercase tracking-widest"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-col py-1">
        <span className="font-black text-sm tracking-tight">{row.getValue("customer")}</span>
        <span className="text-[10px] text-muted-foreground uppercase font-bold opacity-50 tracking-tighter">
          {row.original.id}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge className={cn(
          "rounded-md px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter border-none",
          status === "Paid" ? "bg-emerald-500/10 text-emerald-600" : 
          status === "Pending" ? "bg-orange-500/10 text-orange-600" : 
          "bg-rose-500/10 text-rose-600"
        )}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-[10px] font-bold text-muted-foreground uppercase opacity-70">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as string;
      return <div className="text-right font-black text-sm tracking-tight">{amount}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl min-w-[160px] p-2 z-[100]">
              <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Actions</DropdownMenuLabel>
              <DropdownMenuItem className="rounded-lg cursor-pointer gap-2">
                <ExternalLink className="h-3.5 w-3.5" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg cursor-pointer gap-2">
                <Download className="h-3.5 w-3.5" />
                Download Invoice
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-lg cursor-pointer gap-2 text-rose-500 focus:text-rose-500 focus:bg-rose-50/10">
                <Trash2 className="h-3.5 w-3.5" />
                Delete Record
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

interface RecentTransactionsTableProps {
  data: Transaction[];
}

export function RecentTransactionsTable({ data }: RecentTransactionsTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
        pagination: {
            pageSize: 5,
        }
    }
  });

  return (
    <div className="space-y-4">
      {/* TOOLBAR */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Filter customers..."
            value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("customer")?.setFilterValue(event.target.value)
            }
            className="pl-9 h-9 rounded-xl border-border/50 bg-secondary/20 focus-visible:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" className="h-9 rounded-xl border-border/50 hidden sm:flex gap-2 text-xs font-bold uppercase tracking-tight">
             <Filter className="h-3 w-3" />
             Status
           </Button>
        </div>
      </div>

      {/* TABLE */}
      <div className="rounded-xl border border-border/40 overflow-hidden">
        <Table>
          <TableHeader className="bg-secondary/30 border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-black text-[9px] uppercase tracking-widest opacity-50">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-secondary/20 transition-colors border-border/30 h-14"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          {table.getFilteredRowModel().rows.length} Total Transactions
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-[10px] font-black uppercase tracking-tighter">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0 rounded-lg border-border/50"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0 rounded-lg border-border/50"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
