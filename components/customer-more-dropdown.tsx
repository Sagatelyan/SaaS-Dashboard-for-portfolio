"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import { useCustomers } from "@/store/use-customers";
import { Customer } from "./tables/table-transactions/columns";
import { DeleteCustomerAlert } from "./alerts/delete-customer-alert";

export default function CustomerMoreDropdown({
  customer,
}: {
  customer: Customer;
}) {
  const { removeCustomer } = useCustomers();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" className="text-sm sm:px-3 p-2 sm:py-5">
            <Ellipsis size={20} />
          </Button>
        }
      />
      <DropdownMenuContent className="w-45">
        <DropdownMenuItem
          className="p-2 flex items-center justify-between"
          onClick={() => navigator.clipboard.writeText(customer.id)}
        >
          Copy customer ID <Copy />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-2 flex items-center justify-between"
          onClick={() => navigator.clipboard.writeText(customer.email)}
        >
          Copy email <Copy />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-2 flex items-center justify-between"
          onClick={() => navigator.clipboard.writeText(customer.customer)}
        >
          Copy name <Copy />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DeleteCustomerAlert customer={customer} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
