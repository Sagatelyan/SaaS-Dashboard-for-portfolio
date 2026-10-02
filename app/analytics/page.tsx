import AnalyticsAreaChart from "@/components/charts/analytics-area-chart";
import { AnalyticsBarChart } from "@/components/charts/analytics-bar-chart";
import { AnalyticsLineChart } from "@/components/charts/analytics-line-chart";
import KpiCard from "@/components/kpi-cards/home-kpi-card";
import AnalyticsProductsTable from "@/components/tables/analytics-products-table";

export type ChartPeriod = "7D" | "30D" | "3M" | "6M" | "1Y";

export type ChartDataItem = {
  label: string;
  revenue: number;
  profit: number;
};

export type ChartData = Record<ChartPeriod, ChartDataItem[]>;

export default function page() {
  const chartData: ChartData = {
    "7D": [
      { label: "Mon", revenue: 8200, profit: 2800 },
      { label: "Tue", revenue: 10400, profit: 3600 },
      { label: "Wed", revenue: 9200, profit: 3100 },
      { label: "Thu", revenue: 12800, profit: 4400 },
      { label: "Fri", revenue: 11500, profit: 3900 },
      { label: "Sat", revenue: 9800, profit: 3300 },
      { label: "Sun", revenue: 13400, profit: 4700 },
    ],

    "30D": [
      { label: "Jun 1", revenue: 8200, profit: 2800 },
      { label: "Jun 4", revenue: 10400, profit: 3500 },
      { label: "Jun 7", revenue: 9200, profit: 3100 },
      { label: "Jun 10", revenue: 12800, profit: 4300 },
      { label: "Jun 13", revenue: 11500, profit: 3800 },
      { label: "Jun 16", revenue: 14200, profit: 4900 },
      { label: "Jun 19", revenue: 13700, profit: 4600 },
      { label: "Jun 22", revenue: 15800, profit: 5400 },
      { label: "Jun 25", revenue: 17600, profit: 6100 },
      { label: "Jun 28", revenue: 19200, profit: 6800 },
      { label: "Jun 30", revenue: 21400, profit: 7400 },
    ],

    "3M": [
      { label: "Jun", revenue: 142000, profit: 42000 },
      { label: "Jul", revenue: 186000, profit: 56000 },
      { label: "Aug", revenue: 284000, profit: 82400 },
    ],

    "6M": [
      { label: "Mar", revenue: 171000, profit: 53000 },
      { label: "Apr", revenue: 165000, profit: 49000 },
      { label: "May", revenue: 194000, profit: 62000 },
      { label: "Jun", revenue: 218000, profit: 71000 },
      { label: "Jul", revenue: 246000, profit: 79000 },
      { label: "Aug", revenue: 284000, profit: 82400 },
    ],

    "1Y": [
      { label: "Sep", revenue: 118000, profit: 34000 },
      { label: "Oct", revenue: 126000, profit: 37000 },
      { label: "Nov", revenue: 139000, profit: 41000 },
      { label: "Dec", revenue: 151000, profit: 45000 },
      { label: "Jan", revenue: 142000, profit: 42000 },
      { label: "Feb", revenue: 158000, profit: 48000 },
      { label: "Mar", revenue: 171000, profit: 53000 },
      { label: "Apr", revenue: 165000, profit: 49000 },
      { label: "May", revenue: 194000, profit: 62000 },
      { label: "Jun", revenue: 218000, profit: 71000 },
      { label: "Jul", revenue: 246000, profit: 79000 },
      { label: "Aug", revenue: 284000, profit: 82400 },
    ],
  };

  const analyticsKpiCards = [
    {
      title: "Revenue",
      procent: "+18.4%",
      price: "$284,420",
      upDown: true,
    },
    {
      title: "Profit",
      procent: "+12.2%",
      price: "$82,430",
      upDown: true,
    },
    {
      title: "Orders",
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
  ];

  const productPerformance = [
    {
      product: "Pro Plan",
      revenue: 84240,
      sales: 428,
      growth: 14.8,
    },
    {
      product: "Business Plan",
      revenue: 62180,
      sales: 316,
      growth: 19.6,
    },
    {
      product: "Starter",
      revenue: 41620,
      sales: 384,
      growth: 8.4,
    },
    {
      product: "Enterprise",
      revenue: 28940,
      sales: 156,
      growth: 24.7,
    },
  ];

  return (
    <div className="px-6 py-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-3">
          {analyticsKpiCards.map((card) => (
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
          <AnalyticsAreaChart chartData={chartData} />
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-6 w-full">
          <div className="lg:w-[50%] w-full">
            <AnalyticsBarChart />
          </div>
          <div className="lg:w-[50%] w-full">
            <AnalyticsLineChart />
          </div>
        </div>
        <div>
          <AnalyticsProductsTable dataTable={productPerformance} />
        </div>
      </div>
    </div>
  );
}
