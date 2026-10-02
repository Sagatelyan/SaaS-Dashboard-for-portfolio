import { ChartPeriod } from "@/app/analytics/page";
import { create } from "zustand";

type Range = "7D" | "30D" | "3M" | "6M" | "1Y";

type RangeStore = {
  range: ChartPeriod;
  setRange: (range: Range) => void;
};

export const useRangeStore = create<RangeStore>((set) => ({
  range: "1Y",
  setRange: (range) => set({ range }),
}));
