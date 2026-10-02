"use client";

import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  sales: number;
  unitsSold: number;
  growth: number;
}
interface Props {
  data: Product[];
}

export default function SalesProductsTable({ data }: Props) {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default rounded-2xl">
      <div className="py-4 px-6 flex items-center justify-between border-b">
        <div className="w-full flex items-center justify-between gap-2">
          <div>
            <h4 className="font-medium">Top Products</h4>
            <span className="text-muted-foreground text-sm">
              Best performing products
            </span>
          </div>
          <div>
            <a
              href="/products"
              className="flex items-center text-sm gap-2 text-muted-foreground"
            >
              View all <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-sm text-left rtl:text-right text-body">
        <div>
          {data.map((e) => (
            <div
              key={e.id}
              className="px-6 py-3 flex items-center justify-between border-b"
            >
              <div className="flex gap-1">
                <span>{e.id}</span>
                <div className="flex items-center gap-3">
                  <div>
                    <img className="w-20" src={e.image} alt={e.name} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] font-semibold">{e.name}</h5>
                    <span className="text-sm text-muted-foreground">
                      {e.unitsSold} sold
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <h5 className="text-[16px] font-semibold">
                  ${e.sales.toLocaleString("US-en")}
                </h5>
                <span className="text-sm text-muted-foreground flex items-center">
                  {e.growth > 0 ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  )}
                  {Math.abs(e.growth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
