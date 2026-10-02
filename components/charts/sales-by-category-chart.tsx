import { ArrowRight } from "lucide-react";

interface Props {
  product: {
    id: number;
    name: string;
    revenue: number;
    percentage: number;
  };
}

export default function SalesByCategoryChart({ product }: Props) {
  return (
    <>
      <div className="flex gap-10">
        <span className="text-sm font-medium w-40">{product.name}</span>
        <div className="h-11 w-full overflow-hidden rounded bg-muted flex items-center gap-2 mb-2">
          <div
            style={{
              width: `${product.percentage * 2}%`,
              background: `var(--chart-3)`,
            }}
            className="h-full rounded"
          />
          <span className="text-sm">
            {product.percentage.toLocaleString("US-en")}%
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          ${product.revenue.toLocaleString("US-en")}
        </span>
      </div>
    </>
  );
}
