import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { DothDropdownMenu } from "../doth-dropdown-menu";

interface Props {
  title: string;
  procent: string;
  price: string;
  upDown: boolean;
}

export default function KpiCard({ title, procent, price, upDown }: Props) {
  return (
    <div className="w-full min-w-80 sm:w-[48%] xl:min-w-60 border-2 rounded-2xl flex flex-col items-center bg-sidebar-accent">
      <div className="w-full flex flex-col gap-1 p-4">
        <div className="flex items-center justify-between">
          <span className="dark:text-[#c8c8c8] text-[#4b4b4b] text-[16px] font-bold">
            {title}
          </span>
          <DothDropdownMenu />
        </div>
        <h2 className="mb-4 text-5xl font-bold">{price}</h2>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={upDown ? "outline" : "destructive"}>
            <span className="flex items-center gap-2 text-[14px]">
              {upDown ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
              {procent}
            </span>
          </Badge>
          <span className="text-sm">VS</span>
          <span className="text-sm">Last Month</span>
        </div>
        <p className="flex items-center gap-2 dark:text-[#c8c8c8] text-[#4b4b4b] text-[14px]">
          {upDown ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
          {upDown ? "up" : "down"} this month
        </p>
      </div>
    </div>
  );
}
