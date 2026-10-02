"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DothDropdownMenu } from "../doth-dropdown-menu";
import { TrendingUp } from "lucide-react";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", desktop: 20 },
  { date: "2024-04-02", desktop: 25 },
  { date: "2024-04-03", desktop: 31 },
  { date: "2024-04-04", desktop: 26 },
  { date: "2024-04-05", desktop: 33 },
  { date: "2024-04-06", desktop: 41 },
  { date: "2024-04-07", desktop: 45 },
  { date: "2024-04-08", desktop: 49 },
  { date: "2024-04-09", desktop: 89 },
  { date: "2024-04-10", desktop: 61 },
  { date: "2024-04-11", desktop: 57 },
  { date: "2024-04-12", desktop: 92 },
  { date: "2024-04-13", desktop: 32 },
  { date: "2024-04-14", desktop: 87 },
  { date: "2024-04-15", desktop: 90 },
  { date: "2024-04-16", desktop: 138 },
  { date: "2024-04-17", desktop: 146 },
  { date: "2024-04-18", desktop: 110 },
  { date: "2024-04-19", desktop: 180 },
  { date: "2024-04-20", desktop: 189 },
  { date: "2024-04-21", desktop: 237 },
  { date: "2024-04-22", desktop: 224 },
  { date: "2024-04-23", desktop: 138 },
  { date: "2024-04-24", desktop: 187 },
  { date: "2024-04-25", desktop: 215 },
  { date: "2024-04-26", desktop: 75 },
  { date: "2024-04-27", desktop: 183 },
  { date: "2024-04-28", desktop: 202 },
  { date: "2024-04-29", desktop: 315 },
  { date: "2024-04-30", desktop: 254 },
  { date: "2024-05-01", desktop: 365 },
  { date: "2024-05-02", desktop: 293 },
  { date: "2024-05-03", desktop: 347 },
  { date: "2024-05-04", desktop: 385 },
  { date: "2024-05-05", desktop: 401 },
  { date: "2024-05-06", desktop: 438 },
  { date: "2024-05-07", desktop: 388 },
  { date: "2024-05-08", desktop: 349 },
  { date: "2024-05-09", desktop: 297 },
  { date: "2024-05-10", desktop: 303 },
  { date: "2024-05-11", desktop: 335 },
  { date: "2024-05-12", desktop: 297 },
  { date: "2024-05-13", desktop: 280 },
  { date: "2024-05-14", desktop: 348 },
  { date: "2024-05-15", desktop: 433 },
  { date: "2024-05-16", desktop: 438 },
  { date: "2024-05-17", desktop: 459 },
  { date: "2024-05-18", desktop: 415 },
  { date: "2024-05-19", desktop: 455 },
  { date: "2024-05-20", desktop: 477 },
  { date: "2024-05-21", desktop: 488 },
  { date: "2024-05-22", desktop: 493 },
  { date: "2024-05-23", desktop: 452 },
  { date: "2024-05-24", desktop: 394 },
  { date: "2024-05-25", desktop: 401 },
  { date: "2024-05-26", desktop: 460 },
  { date: "2024-05-27", desktop: 490 },
  { date: "2024-05-28", desktop: 533 },
  { date: "2024-05-29", desktop: 538 },
  { date: "2024-05-30", desktop: 540 },
  { date: "2024-05-31", desktop: 578 },
  { date: "2024-06-01", desktop: 588 },
  { date: "2024-06-02", desktop: 594 },
  { date: "2024-06-03", desktop: 603 },
  { date: "2024-06-04", desktop: 639 },
  { date: "2024-06-05", desktop: 648 },
  { date: "2024-06-06", desktop: 694 },
  { date: "2024-06-07", desktop: 723 },
  { date: "2024-06-08", desktop: 755 },
  { date: "2024-06-09", desktop: 738 },
  { date: "2024-06-10", desktop: 755 },
  { date: "2024-06-11", desktop: 792 },
  { date: "2024-06-12", desktop: 802 },
  { date: "2024-06-13", desktop: 841 },
  { date: "2024-06-14", desktop: 826 },
  { date: "2024-06-15", desktop: 857 },
  { date: "2024-06-16", desktop: 871 },
  { date: "2024-06-17", desktop: 875 },
  { date: "2024-06-18", desktop: 887 },
  { date: "2024-06-19", desktop: 891 },
  { date: "2024-06-20", desktop: 908 },
  { date: "2024-06-21", desktop: 919 },
  { date: "2024-06-22", desktop: 917 },
  { date: "2024-06-23", desktop: 946 },
  { date: "2024-06-24", desktop: 952 },
  { date: "2024-06-25", desktop: 967 },
  { date: "2024-06-26", desktop: 980 },
  { date: "2024-06-27", desktop: 999 },
  { date: "2024-06-28", desktop: 1010 },
  { date: "2024-06-29", desktop: 1030 },
  { date: "2024-06-30", desktop: 1046 },
];

const totalSum =
  Math.ceil(
    chartData
      .map((e) => e.desktop)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      100,
  ) * 100;

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Sum(K)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function HomeAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0 h-full">
      <CardHeader className="flex items-start justify-between gap-2 space-y-0 border-b py-5 sm:flex-row min-w-[70%]">
        <div className="grid flex-1 gap-1">
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>
            Revenue performance over the last 90 days
          </CardDescription>
          <div className="text-5xl font-bold my-1">${totalSum / 1000}KK</div>
          <CardDescription className="flex items-center gap-2">
            <TrendingUp size={16} className="dark:text-white text-black" />
            <span className="text-[16px] dark:text-white text-black">
              12.8%
            </span>
            vs previous period
          </CardDescription>
        </div>
        <div className="flex flex-col gap-2 items-end justify-between">
          <div>
            <DothDropdownMenu />
          </div>
          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value);
              }
            }}
          >
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl px-1 py-2">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
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
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    });
                  }}
                  indicator="line"
                />
              }
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
