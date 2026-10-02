import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { DothDropdownMenu } from "../doth-dropdown-menu";

interface Props {
  title: string;
  procent: string;
  count: string;
  upDown: boolean;
}

export default function SmallKpiCard({ title, procent, count, upDown }: Props) {
  return (
    <div className="2xl:w-full w-full md:min-w-[48%] lg:h-auto h-45 sm:min-w-56 min-w-40 border-2 rounded-2xl flex flex-col items-center bg-sidebar-accent ">
      <div className="w-full h-full flex flex-col gap-1 p-3">
        <div className="w-full h-[90%] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="dark:text-[#c8c8c8] text-[#4b4b4b] lg:text-[14px] sm:text-[12px] text-[10px] font-bold">
              {title}
            </span>
            <DothDropdownMenu />
          </div>
          <h2 className="lg:text-[38px] text-[35px] font-bold">{count}</h2>
          <div></div>
        </div>
        <div className="flex sm:items-center sm:justify-between flex-wrap lg:flex-nowrap">
          <div>
            <span className="flex items-center gap-2 sm:text-[14px] text-[12px]">
              {upDown ? <TrendingUp size={18} /> : null}
              {procent}
            </span>
          </div>
          <p className="flex items-center gap-2 dark:text-[#c8c8c8] text-[#4b4b4b] text-[12px]">
            {upDown ? <TrendingUp size={18} /> : null}
            {upDown ? "up this month" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
