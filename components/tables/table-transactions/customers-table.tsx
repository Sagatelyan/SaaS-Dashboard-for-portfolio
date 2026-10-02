"use client";

import { useCustomers } from "@/store/use-customers";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function CustomersTable() {
  const { customers } = useCustomers();
  return (
    <div className="mx-auto pb-10 w-full">
      <DataTable
        columns={columns}
        data={customers}
        pagination={true}
        href="#"
      />
    </div>
  );
}
