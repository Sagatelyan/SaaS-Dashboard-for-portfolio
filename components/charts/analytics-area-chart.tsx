"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DothDropdownMenu } from "../doth-dropdown-menu";
import { useRangeStore } from "@/store/use-chart-data";
import { ChartData } from "@/app/analytics/page";

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function AnalyticsAreaChart({
  chartData,
}: {
  chartData: ChartData;
}) {
  const { range, setRange } = useRangeStore();

  const revenueSum =
    Math.round(
      chartData[range]
        .map((e) => e.revenue)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    ) / 1000;

  const profitSum =
    Math.round(
      chartData[range]
        .map((e) => e.profit)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    ) / 1000;


  return (
    <Card className="pt-0 h-full">
      <CardHeader>
        <div className="px-4 pt-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Revenue & Profit</h2>
          <div className="flex items-center gap-3">
            <Select
              value={range}
              onValueChange={(value) => {
                if (value !== null) {
                  setRange(value);
                }
              }}
            >
              <SelectTrigger
                className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                aria-label="Select a value"
              >
                <SelectValue placeholder="1Y" />
              </SelectTrigger>
              <SelectContent className="rounded-xl px-1 py-2">
                <SelectItem value="1Y" className="rounded-lg">
                  Last year
                </SelectItem>
                <SelectItem value="6M" className="rounded-lg">
                  Last 6 months
                </SelectItem>
                <SelectItem value="3M" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30D" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7D" className="rounded-lg">
                  Last 7 days
                </SelectItem>
              </SelectContent>
            </Select>
            <DothDropdownMenu />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          className="aspect-auto h-[300px] w-full"
          config={chartConfig}
        >
          <AreaChart data={chartData[range]}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-5)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
              tickFormatter={(value) => `$${value / 1000}K`}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent indicator="line" className="w-40" />
              }
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-3)"
              stackId="a"
              strokeWidth={2}
            />
            <Area
              dataKey="profit"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-4)"
              stackId="a"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
        <div className="flex items-center gap-10 pl-15 pt-6 pb-3">
          <span className="text-[16px] text-muted-foreground">
            <span className="text-[18px] font-bold text-black dark:text-white">
              {revenueSum.toLocaleString("en-US")}K
            </span>
            - Revenue
          </span>
          <span className="text-[16px] text-muted-foreground">
            <span className="text-[18px] font-bold text-black dark:text-white">
              {profitSum.toLocaleString("en-US")}K
            </span>
            - Profit
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
