"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface Product {
  product: string;
  revenue: number;
  sales: number;
  growth: number;
}
interface Props {
  dataTable: Product[];
}

export default function AnalyticsProductsTable({ dataTable }: Props) {
  const [sortField, setSortField] = useState<"revenue" | "sales" | "growth">(
    "revenue",
  );

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const sortedData = [...dataTable].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] - b[sortField];
    }
    return b[sortField] - a[sortField];
  });

  const handleSort = (field: "revenue" | "sales" | "growth") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <div className="py-4 px-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Product Performance</h4>
          <span className="text-muted-foreground text-sm">
            Revenue and sales by product
          </span>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-sidebar border-b border-t border-default-medium">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-4 py-3 font-bold text-[16px]">
              Product
            </th>
            <th scope="col">
              <Button
                variant="ghost"
                className="px-4 py-3 font-bold text-[16px]"
                onClick={() => handleSort("revenue")}
              >
                Revenue
                <ArrowUpDown />
              </Button>
            </th>
            <th scope="col" className="pr-6 py-3 font-bold text-[16px]">
              <Button
                variant="ghost"
                className=" font-bold text-[16px]"
                onClick={() => handleSort("sales")}
              >
                Sales
                <ArrowUpDown />
              </Button>
            </th>
            <th scope="col" className="px-3 py-3 font-bold text-[16px]">
              <Button
                variant="ghost"
                className=" font-bold text-[16px]"
                onClick={() => handleSort("growth")}
              >
                Growth
                <ArrowUpDown />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((e) => (
            <tr
              key={e.product}
              className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
            >
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {e.product}
              </th>
              <td className="px-6 py-4">
                ${e.revenue.toLocaleString("en-US")}
              </td>
              <td className="px-6 py-4">{e.sales}</td>
              <td className="px-6 py-4 flex items-center gap-1 ">
                <span>↑</span>
                {e.growth}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
