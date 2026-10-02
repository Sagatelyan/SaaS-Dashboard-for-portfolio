import { ArrowRight, Dot } from "lucide-react";

export default function TopProducts() {
  const products = [
    { title: "Pro Plan", procent: 38, profit: "24,820", sales: 428 },
    { title: "Business Plan", procent: 27, profit: "18,430", sales: 316 },
    { title: "Starter", procent: 19, profit: "12,240", sales: 241 },
    { title: "Enterprise", procent: 16, profit: "9,820", sales: 156 },
  ];

  return (
    <div className="rounded-2xl border">
      {/* Header */}
      <div className="px-6 pt-6">
        <h2 className="text-lg font-semibold mb-1">Top Products</h2>
        <span className="text-muted-foreground text-sm">
          Share of total revenue
        </span>
      </div>

      {/* Content */}
      <div className="w-full space-y-5 p-6">
        {products.map((product) => (
          <div key={product.title}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">{product.title}</span>
              <span className="text-sm text-muted-foreground">
                {product.procent}%
              </span>
            </div>

            <div className="h-10 w-full overflow-hidden rounded bg-muted">
              <div
                style={{
                  width: `${product.procent * 2}%`,
                  background: `var(--chart-3)`,
                }}
                className="h-full rounded"
              />
            </div>
            <div className="pt-1">
              <span className="xl:text-[14px] text-[12px] flex items-center">
                ${product.profit} revenue <Dot /> {product.sales} sales
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <a
          href="/products"
          className="flex items-center text-sm gap-2 text-muted-foreground transition duration-200 hover:gap-3"
        >
          View all <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
