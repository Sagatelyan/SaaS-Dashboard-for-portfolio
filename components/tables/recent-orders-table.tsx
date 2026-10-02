"use client";

import { ArrowRight, ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: string;
  date: string;
}
interface Props {
  dataTable: Product[];
  big: boolean;
}

export default function RecentOrdersTable({ dataTable, big }: Props) {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default rounded-2xl">
      <div className="pt-8 pb-6 px-6 flex items-center justify-between">
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Recent Orders</h4>
            <span className="text-muted-foreground text-sm">
              Latest transactions and order activity
            </span>
          </div>
          <div>
            <a
              href="/orders"
              className="flex items-center text-sm gap-2 text-muted-foreground"
            >
              View all <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-sidebar border-b border-t border-default-medium">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-4 py-5 font-bold text-[16px]">
              Order
            </th>
            <th scope="col">
              <Button
                variant="ghost"
                className={big ? "px-4 py-3 font-bold text-[16px]" : "hidden"}
              >
                Customer
              </Button>
              <span
                className={
                  big
                    ? "hidden"
                    : "px-4 py-3 font-bold text-[16px] cursor-pointer"
                }
              >
                Customer
              </span>
            </th>
            <th scope="col">
              <Button
                variant="ghost"
                className={big ? "px-4 py-3 font-bold text-[16px]" : "hidden"}
              >
                Product
              </Button>
              <span
                className={
                  big
                    ? "hidden"
                    : "px-4 py-3 font-bold text-[16px] cursor-pointer"
                }
              >
                Product
              </span>
            </th>
            <th scope="col">
              <Button
                variant="ghost"
                className={big ? "px-4 py-3 font-bold text-[16px]" : "hidden"}
              >
                Amount
              </Button>
              <span
                className={
                  big
                    ? "hidden"
                    : "px-4 py-3 font-bold text-[16px] cursor-pointer"
                }
              >
                Amount
              </span>
            </th>
            <th scope="col">
              <Button
                variant="ghost"
                className={big ? "px-4 py-3 font-bold text-[16px]" : "hidden"}
              >
                Status
              </Button>
              <span
                className={
                  big
                    ? "hidden"
                    : "px-4 py-3 font-bold text-[16px] cursor-pointer"
                }
              >
                Status
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((e) => (
            <tr
              key={e.product}
              className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
            >
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th className="px-6 py-4">{e.id}</th>
              <td className="px-6 py-4">{e.customer}</td>
              <td className="px-6 py-4">{e.product}</td>
              <td className="px-6 py-4">${e.amount}</td>
              <td className="px-6 py-4">{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
