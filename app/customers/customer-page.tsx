"use client";

import { recentOrders } from "@/data/customers";
import BackButton from "@/components/back-button";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import CustomerKpiCard from "@/components/kpi-cards/customer-kpi-card";
import CustomerMoreDropdown from "@/components/customer-more-dropdown";
import { useCustomers } from "@/store/use-customers";
import { EditCustomer } from "@/components/edit-customer";

export default function CustomerPage({ id }: { id: string }) {
  const { customers } = useCustomers();

  const customer = customers.find((customer) => customer.id === id);

  const avgOrder = customer ? customer.spent / customer.orders : 0;
  const customerRecentOrders = recentOrders.find((e) => e.customerId === id);

  const kpiCards = [
    {
      title: "Spent",
      count: `$${customer?.spent.toString()}`,
    },
    {
      title: "Orders",
      count: customer?.orders.toString(),
    },
    {
      title: "Avg. Order",
      count: `$${avgOrder.toFixed(2)}`,
    },
  ];

  if (!customer) {
    return (
      <div className="h-full flex items-center justify-center text-2xl font-bold">
        Customer not found!
      </div>
    );
  }

  return (
    <div className="sm:px-6 px-2 py-4 max-w-[1200px] ml-6">
      <div className="flex flex-col gap-6">
        <div>
          <BackButton title="Customers" />
        </div>
        <div className="flex md:flex-row flex-col md:gap-8 px-8 py-6 border-y">
          <div>
            <Avatar className="w-16 h-16">
              <AvatarImage src={customer.avatar} alt="avatar" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              <AvatarBadge
                className={
                  customer.status === "active"
                    ? "bg-green-600 dark:bg-green-800 h-2 p-2 text-sm"
                    : "bg-gray-400 dark:bg-gray-600 h-2 p-2 text-sm"
                }
              />
            </Avatar>
          </div>
          <div className="w-full flex justify-between sm:items-start items-center pt-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{customer.customer}</h2>
              <span className="text-sm dark:text-neutral-300 text-neutral-600">
                {customer.email}
              </span>
              <span className="text-[13px] dark:text-neutral-300 text-neutral-600">
                Since {customer.customerSince}
              </span>
            </div>
            <div className="flex sm:flex-row flex-col-reverse sm:items-center items-end gap-3">
              <EditCustomer
                variant="outline"
                customer={customer}
                className="sm:px-5 py-5 px-3 text-[12px] sm-text-[16px]"
              />
              <CustomerMoreDropdown customer={customer} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-3">
          {kpiCards.map((card, i) => (
            <CustomerKpiCard key={i} title={card.title} count={card.count} />
          ))}
        </div>
        <div className="flex flex-col gap-4 pb-5">
          <span className="text-[16px] font-semibold ml-1">Details</span>
          <div className="lg:w-[35%] md:w-[60%] w-[80%] flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className=" text-[13px] etext-neutral-700 dark:text-neutral-300">
                Phone
              </span>
              <span className=" text-[13px] etext-neutral-700 dark:text-neutral-300">
                Company
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{customer.phone}</span>
              <span className="text-sm font-semibold">{customer.company}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div className="py-4 px-6 flex items-center justify-between">
              <span className="text-[14px] font-semibold ml-1">
                Recent Orders
              </span>
              <a
                href="#"
                className="flex items-center text-sm gap-2 text-muted-foreground transition duration-200 hover:gap-3"
              >
                View all <ArrowRight size={16} />
              </a>{" "}
            </div>
            <div className="w-full max-w-170 md:max-w-full overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-sidebar border-b border-t border-default-medium">
                  <tr>
                    <th className="w-1/4 py-3 pl-8 text-left font-bold text-[16px]">
                      Order
                    </th>

                    <th className="w-1/4 py-3 text-left font-bold text-[16px]">
                      Date
                    </th>

                    <th className="w-1/4 py-3 text-left font-bold text-[16px]">
                      Amount
                    </th>

                    <th className="w-1/4 py-3 pr-8 text-left font-bold text-[16px]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {customerRecentOrders?.orders.slice(0, 5).map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-default bg-neutral-primary-soft hover:bg-neutral-secondary-medium"
                    >
                      <td className="py-3 pl-6">{order.id}</td>

                      <td className="py-3">{order.date}</td>

                      <td className="py-3">
                        ${order.amount.toLocaleString("en-US")}.00
                      </td>

                      <td className="py-3 pr-6">
                        <div className="flex items-center gap-2">
                          <div
                            className={
                              order.status === "Paid"
                                ? "size-2 rounded-full bg-green-500"
                                : order.status === "Pending"
                                  ? "size-2 rounded-full bg-yellow-500"
                                  : "size-2 rounded-full bg-red-500"
                            }
                          />

                          {order.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
