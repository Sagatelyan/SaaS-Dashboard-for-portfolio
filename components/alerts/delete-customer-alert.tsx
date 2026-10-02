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
import { Button } from "@/components/ui/button";
import { Customer } from "../tables/table-transactions/columns";
import { useCustomers } from "@/store/use-customers";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface Props {
  name: string;
}

export function DeleteCustomerAlert({ customer }: { customer: Customer }) {
  const { removeCustomer } = useCustomers();
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="destructive" className="w-full flex justify-start">
            Delete Customer
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete {customer.customer}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. All customer data associated with this
            account will be permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogCancel
            variant={"destructive"}
            onClick={() => removeCustomer(customer.id)}
          >
            Delete customer
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
