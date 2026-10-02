"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { type DataTableFeatures } from "./data-table-features";

import { CircleCheck, CircleX, Loader, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { AvatarWithBadge } from "@/components/avatar-with-badge";
import { useCustomers } from "@/store/use-customers";
import Link from "next/link";
import { DeleteCustomerAlert } from "@/components/alerts/delete-customer-alert";
import { EditCustomer } from "@/components/edit-customer";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Customer = {
  id: string;
  customer: string;
  email: string;
  phone: string;
  company: string;
  avatar: string;
  status: string;
  orders: number;
  spent: number;
  customerSince: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Customer>();

export const columns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("customer", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
        </Button>
      );
    },
    cell: ({ row }) => {
      const avatar = row.original.avatar;
      const customer = row.original.customer;

      return (
        <div className="flex items-center gap-2">
          <AvatarWithBadge src={avatar} badge={false} />
          <span>{customer}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
        </Button>
      );
    },

    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge
          className={
            status === "active" ? "dark:bg-green-700 bg-green-400" : "secondary"
          }
        >
          {status === "active" ? <CircleCheck /> : <CircleX />}
          {status}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("orders", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Orders" />
    ),
  }),
  columnHelper.accessor("spent", {
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Spent"
        className="justify-end"
      />
    ),
    cell: ({ row }) => {
      const firstSpent = row.original.spent;
      const spent = firstSpent.toLocaleString("en-US");

      return <div className="text-right font-medium pr-7">${spent}</div>;
    },
  }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const payment = row.original;
      const { removeCustomer } = useCustomers();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="h-8 w-8 p-0" />}
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-50">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="py-2 px-3">
                <Link href={`/customers/${id}`}>View customer</Link>
              </DropdownMenuItem>
              <EditCustomer
                variant="ghost"
                className="w-full flex justify-start py-5 px-3"
                customer={payment}
              />
              <DropdownMenuItem
                className="py-2 px-3"
                onClick={() => navigator.clipboard.writeText(payment.email)}
              >
                Copy payment email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DeleteCustomerAlert customer={payment} />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
]);
