import SmallKpiCard from "@/components/kpi-cards/small-kpi-card";
import CustomersTable from "@/components/tables/table-transactions/customers-table";

export default function page() {
  const kpiCards = {
    first: [
      {
        title: "Total Customers",
        count: "8,249",
        procent: "8.2%",
        upDown: true,
      },
      {
        title: "Avg. Spend",
        count: "$284.50",
        procent: "4.6%",
        upDown: true,
      },
    ],
    second: [
      {
        title: "Inactive Customers",
        count: "407",
        procent: "4.9% of total",
        upDown: false,
      },
      {
        title: "New Customers",
        count: "284",
        procent: "This month",
        upDown: false,
      },
    ],
    third: [
      {
        title: "Active Customers",
        count: "7,842",
        procent: "95.1% of total",
        upDown: false,
      },
    ],
  };

  return (
    <div className="px-6 py-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 w-full flex-col 2xl:flex-row">
          <div className="flex items-center gap-3 2xl:w-[40%] w-full">
            {kpiCards.first.map((card) => (
              <SmallKpiCard
                key={card.title}
                title={card.title}
                count={card.count}
                procent={card.procent}
                upDown={card.upDown}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 flex-col md:flex-row 2xl:w-[60%] w-full">
            <div className="flex items-center gap-3 md:w-[66%] w-full">
              {kpiCards.second.map((card) => (
                <SmallKpiCard
                  key={card.title}
                  title={card.title}
                  count={card.count}
                  procent={card.procent}
                  upDown={card.upDown}
                />
              ))}
            </div>
            <div className="flex items-center flex-wrap gap-3 md:w-[33%] w-full">
              {kpiCards.third.map((card) => (
                <SmallKpiCard
                  key={card.title}
                  title={card.title}
                  count={card.count}
                  procent={card.procent}
                  upDown={card.upDown}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <CustomersTable />
        </div>
      </div>
    </div>
  );
}
