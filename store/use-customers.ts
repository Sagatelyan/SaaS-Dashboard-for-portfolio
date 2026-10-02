import { Customer } from "@/components/tables/table-transactions/columns";
import { customers } from "@/data/customers";
import { create } from "zustand";

type CustomersStore = {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  removeCustomer: (id: string) => void;
  editCustomer: (customer: Customer) => void;
};

export const useCustomers = create<CustomersStore>((set) => ({
  customers: customers,

  addCustomer: (customer) =>
    set((state) => ({
      customers: [...state.customers, customer],
    })),

  removeCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((customer) => customer.id !== id),
    })),

  editCustomer: (customer) =>
    set((state) => ({
      customers: state.customers.map((item) =>
        item.id === customer.id ? customer : item,
      ),
    })),
}));
