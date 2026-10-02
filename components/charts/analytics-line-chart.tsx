"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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

export const description = "A line chart";

const customerGrowth = {
  "7D": [
    { label: "Mon", customers: 8120 },
    { label: "Tue", customers: 8158 },
    { label: "Wed", customers: 8184 },
    { label: "Thu", customers: 8216 },
    { label: "Fri", customers: 8238 },
    { label: "Sat", customers: 8261 },
    { label: "Sun", customers: 8249 },
  ],

  "30D": [
    { label: "Jun 1", customers: 7482 },
    { label: "Jun 4", customers: 7564 },
    { label: "Jun 7", customers: 7638 },
    { label: "Jun 10", customers: 7716 },
    { label: "Jun 13", customers: 7798 },
    { label: "Jun 16", customers: 7874 },
    { label: "Jun 19", customers: 7942 },
    { label: "Jun 22", customers: 8018 },
    { label: "Jun 25", customers: 8106 },
    { label: "Jun 28", customers: 8182 },
    { label: "Jun 30", customers: 8249 },
  ],

  "3M": [
    { label: "Jun", customers: 7540 },
    { label: "Jul", customers: 7980 },
    { label: "Aug", customers: 8249 },
  ],

  "6M": [
    { label: "Mar", customers: 6120 },
    { label: "Apr", customers: 6480 },
    { label: "May", customers: 7020 },
    { label: "Jun", customers: 7540 },
    { label: "Jul", customers: 7980 },
    { label: "Aug", customers: 8249 },
  ],

  "1Y": [
    { label: "Sep", customers: 4820 },
    { label: "Oct", customers: 4980 },
    { label: "Nov", customers: 5160 },
    { label: "Dec", customers: 5340 },
    { label: "Jan", customers: 5420 },
    { label: "Feb", customers: 5780 },
    { label: "Mar", customers: 6120 },
    { label: "Apr", customers: 6480 },
    { label: "May", customers: 7020 },
    { label: "Jun", customers: 7540 },
    { label: "Jul", customers: 7980 },
    { label: "Aug", customers: 8249 },
  ],
};

const chartConfig = {
  customers: {
    label: "customers",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AnalyticsLineChart() {
  const { range, setRange } = useRangeStore();

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>Customer Growth</CardTitle>
          <CardDescription>
            Total customer base -
            {customerGrowth[range][customerGrowth[range].length - 1].customers}
          </CardDescription>
          <CardDescription className="flex items-center gap-1">
            <span className="text-black dark:text-white text-[16px]">
              ↑ 8.2%
            </span>
            vs previous period
          </CardDescription>
        </div>
        <DothDropdownMenu />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={customerGrowth[range]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="w-35" />}
            />
            <Line
              dataKey="customers"
              type="natural"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
