import SalesAreaChart from "@/components/charts/sales-area-chart";
import SalesByCategoryChart from "@/components/charts/sales-by-category-chart";
import { DothDropdownMenu } from "@/components/doth-dropdown-menu";
import KpiCard from "@/components/kpi-cards/home-kpi-card";
import RecentOrdersTable from "@/components/tables/recent-orders-table";
import SalesProductsTable from "@/components/tables/sales-products-table";
import { products, salesByCategory } from "@/data/products";
import { recentOrders } from "@/data/recent-orders";
import { ArrowRight } from "lucide-react";

const salesKpiCards = [
  {
    title: "Total Revenue",
    procent: "+18.4%",
    price: "$284,420",
    upDown: true,
  },
  {
    title: "Total Orders",
    procent: "-5.4%",
    price: "1,284",
    upDown: false,
  },
  {
    title: "Average Order Value",
    procent: " 4.8%",
    price: "$221.50",
    upDown: true,
  },
  {
    title: "Conversion Rate",
    procent: " 0.6%",
    price: "4.82%",
    upDown: true,
  },
];

export default function page() {
  return (
    <div className="px-6 py-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-3">
          {salesKpiCards.map((card) => (
            <KpiCard
              key={card.title}
              title={card.title}
              procent={card.procent}
              price={card.price}
              upDown={card.upDown}
            />
          ))}
        </div>
        <div>
          <SalesAreaChart />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[50%]">
            <SalesProductsTable data={products} />
          </div>
          <div className="rounded-2xl border w-[50%]">
            {/* Header */}
            <div className="px-6 py-6 flex justify-between items-center border-b">
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  Sales by Category
                </h2>
                <span className="text-muted-foreground text-sm">
                  Revenue distribution
                </span>
              </div>
              <DothDropdownMenu />
            </div>
            {/* Content */}
            <div className="w-full space-y-5 p-6">
              {salesByCategory.map((e, i) => (
                <SalesByCategoryChart key={i} product={e} />
              ))}
            </div>
            {/* Footer */}
            <div className="border-t p-4">
              <a
                href="#"
                className="flex items-center text-sm gap-2 text-muted-foreground transition duration-200 hover:gap-3"
              >
                View all <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <RecentOrdersTable
            big={false}
            dataTable={recentOrders.slice(0, 10)}
          />
        </div>
      </div>
    </div>
  );
}
