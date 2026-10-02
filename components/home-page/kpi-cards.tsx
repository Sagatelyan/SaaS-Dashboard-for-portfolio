import KpiCard from "../kpi-cards/home-kpi-card";
import HomeKpiCard from "../kpi-cards/home-kpi-card";

const kpiCards = [
  {
    title: "Revenue",
    procent: "+18.4%",
    price: "$284,420",
    upDown: true,
  },
  {
    title: " Sales",
    procent: "+12.8%",
    price: "$42,840",
    upDown: true,
  },
  {
    title: "Customers",
    procent: "+8.2%",
    price: "8,249",
    upDown: true,
  },
  {
    title: "Orders",
    procent: "-5.4%",
    price: "1,284",
    upDown: false,
  },
];

export default function KpiCards() {
  return (
    <section>
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-3">
        {kpiCards.map((card) => (
          <KpiCard
            key={card.title}
            title={card.title}
            procent={card.procent}
            price={card.price}
            upDown={card.upDown}
          />
        ))}
      </div>
    </section>
  );
}
