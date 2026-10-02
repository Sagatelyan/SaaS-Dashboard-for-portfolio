import { HomeAreaChart } from "@/components/charts/home-area-chart";
import KpiCards from "@/components/home-page/kpi-cards";
import TopProducts from "@/components/home-page/top-products";
import { columns } from "@/components/tables/table-transactions/columns";
import { DataTable } from "@/components/tables/table-transactions/data-table";
import { customers } from "@/data/customers";

export default function Home() {
  return (
    <div className="px-6 py-4">
      <div className="flex flex-col gap-6">
        <KpiCards />
        <HomeAreaChart />
        <div className="flex items-center lg:flex-row flex-col gap-6">
          <div className="lg:w-[70%] w-full">
            <DataTable
              columns={columns}
              data={customers.slice(-10)}
              pagination={false}
              href="customers"
            />
          </div>
          <div className="lg:w-[30%] w-full">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
