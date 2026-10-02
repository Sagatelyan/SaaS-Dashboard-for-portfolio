"use client";

import { MoveUp, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useRangeStore } from "@/store/use-chart-data";
import { DothDropdownMenu } from "../doth-dropdown-menu";

export const description = "A bar chart";

const salesPerformance = {
  "7D": [
    { label: "Mon", sales: 142 },
    { label: "Tue", sales: 168 },
    { label: "Wed", sales: 154 },
    { label: "Thu", sales: 187 },
    { label: "Fri", sales: 201 },
    { label: "Sat", sales: 176 },
    { label: "Sun", sales: 194 },
  ],

  "30D": [
    { label: "Jun 1", sales: 142 },
    { label: "Jun 4", sales: 168 },
    { label: "Jun 7", sales: 154 },
    { label: "Jun 10", sales: 187 },
    { label: "Jun 13", sales: 201 },
    { label: "Jun 16", sales: 176 },
    { label: "Jun 19", sales: 194 },
    { label: "Jun 22", sales: 218 },
    { label: "Jun 25", sales: 231 },
    { label: "Jun 28", sales: 246 },
    { label: "Jun 30", sales: 258 },
  ],

  "3M": [
    { label: "Jun", sales: 842 },
    { label: "Jul", sales: 1068 },
    { label: "Aug", sales: 1284 },
  ],

  "6M": [
    { label: "Mar", sales: 781 },
    { label: "Apr", sales: 924 },
    { label: "May", sales: 1018 },
    { label: "Jun", sales: 842 },
    { label: "Jul", sales: 1068 },
    { label: "Aug", sales: 1284 },
  ],

  "1Y": [
    { label: "Sep", sales: 624 },
    { label: "Oct", sales: 682 },
    { label: "Nov", sales: 741 },
    { label: "Dec", sales: 798 },
    { label: "Jan", sales: 842 },
    { label: "Feb", sales: 716 },
    { label: "Mar", sales: 781 },
    { label: "Apr", sales: 924 },
    { label: "May", sales: 1018 },
    { label: "Jun", sales: 842 },
    { label: "Jul", sales: 1068 },
    { label: "Aug", sales: 1284 },
  ],
};

const chartConfig = {
  sales: {
    label: "sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AnalyticsBarChart() {
  const { range, setRange } = useRangeStore();

  const totalOrders = Math.round(
    salesPerformance[range]
      .map((e) => e.sales)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>
            Orders completed - {totalOrders.toLocaleString("en-US")}
          </CardDescription>
          <CardDescription className="flex items-center gap-1">
            <span className="text-black dark:text-white text-[16px]">
              ↑ 12.8%
            </span>
            vs previous period
          </CardDescription>
        </div>
        <DothDropdownMenu />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={salesPerformance[range]}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickFormatter={(value) => `${value / 1000}K`} />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Bar dataKey="sales" fill="var(--chart-5)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
