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
import { useState } from "react";

const chartConfig = {
  value: {
    label: "value",
  },
} satisfies ChartConfig;

export default function SalesAreaChart() {
  const chartDataSales = {
    "7D": [
      { label: "Mon", value: 18400 },
      { label: "Tue", value: 22100 },
      { label: "Wed", value: 19800 },
      { label: "Thu", value: 24600 },
      { label: "Fri", value: 28900 },
      { label: "Sat", value: 26400 },
      { label: "Sun", value: 31200 },
    ],

    "30D": [
      { label: "Jun 1", value: 18400 },
      { label: "Jun 4", value: 22100 },
      { label: "Jun 7", value: 19800 },
      { label: "Jun 10", value: 24600 },
      { label: "Jun 13", value: 28900 },
      { label: "Jun 16", value: 26400 },
      { label: "Jun 19", value: 31700 },
      { label: "Jun 22", value: 34200 },
      { label: "Jun 25", value: 38600 },
      { label: "Jun 28", value: 42100 },
      { label: "Jun 30", value: 45800 },
    ],

    "3M": [
      { label: "Jun", value: 186000 },
      { label: "Jul", value: 228000 },
      { label: "Aug", value: 284420 },
    ],

    "6M": [
      { label: "Mar", value: 171000 },
      { label: "Apr", value: 165000 },
      { label: "May", value: 194000 },
      { label: "Jun", value: 218000 },
      { label: "Jul", value: 246000 },
      { label: "Aug", value: 284420 },
    ],

    "1Y": [
      { label: "Sep", value: 118000 },
      { label: "Oct", value: 126000 },
      { label: "Nov", value: 139000 },
      { label: "Dec", value: 151000 },
      { label: "Jan", value: 142000 },
      { label: "Feb", value: 158000 },
      { label: "Mar", value: 171000 },
      { label: "Apr", value: 165000 },
      { label: "May", value: 194000 },
      { label: "Jun", value: 218000 },
      { label: "Jul", value: 246000 },
      { label: "Aug", value: 284420 },
    ],
  };
  const chartDataOverview = {
    "7D": [
      { label: "Mon", value: 24800 },
      { label: "Tue", value: 27300 },
      { label: "Wed", value: 26100 },
      { label: "Thu", value: 28900 },
      { label: "Fri", value: 31400 },
      { label: "Sat", value: 29800 },
      { label: "Sun", value: 33600 },
    ],

    "30D": [
      { label: "Jun 1", value: 24800 },
      { label: "Jun 4", value: 26100 },
      { label: "Jun 7", value: 27300 },
      { label: "Jun 10", value: 28900 },
      { label: "Jun 13", value: 30100 },
      { label: "Jun 16", value: 29400 },
      { label: "Jun 19", value: 31700 },
      { label: "Jun 22", value: 32900 },
      { label: "Jun 25", value: 34100 },
      { label: "Jun 28", value: 35600 },
      { label: "Jun 30", value: 37200 },
    ],

    "3M": [
      { label: "Jun", value: 248000 },
      { label: "Jul", value: 266000 },
      { label: "Aug", value: 284000 },
    ],

    "6M": [
      { label: "Mar", value: 218000 },
      { label: "Apr", value: 226000 },
      { label: "May", value: 241000 },
      { label: "Jun", value: 248000 },
      { label: "Jul", value: 266000 },
      { label: "Aug", value: 284000 },
    ],

    "1Y": [
      { label: "Sep", value: 172000 },
      { label: "Oct", value: 181000 },
      { label: "Nov", value: 194000 },
      { label: "Dec", value: 213000 },
      { label: "Jan", value: 207000 },
      { label: "Feb", value: 218000 },
      { label: "Mar", value: 218000 },
      { label: "Apr", value: 226000 },
      { label: "May", value: 241000 },
      { label: "Jun", value: 248000 },
      { label: "Jul", value: 266000 },
      { label: "Aug", value: 284000 },
    ],
  };

  const [dataType, setDataType] = useState<"Sales" | "Overview">("Sales");

  const chartData = dataType === "Sales" ? chartDataSales : chartDataOverview;

  const { range, setRange } = useRangeStore();

  return (
    <Card className="pt-0 h-full">
      <CardHeader>
        <div className="px-4 pt-6 flex items-center justify-between">
          <div>
            <Select
              value={dataType}
              onValueChange={(value) => {
                if (value !== null) {
                  setDataType(value);
                }
              }}
            >
              <SelectTrigger
                className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                aria-label="Select data"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="rounded-xl px-1 py-2">
                <SelectItem value="Sales" className="rounded-lg">
                  Sales
                </SelectItem>

                <SelectItem value="Overview" className="rounded-lg">
                  Overview
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
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
              tickFormatter={(value) => `$${value / 1000}K`}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-3)"
              stackId="a"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
        <div></div>
      </CardContent>
    </Card>
  );
}
