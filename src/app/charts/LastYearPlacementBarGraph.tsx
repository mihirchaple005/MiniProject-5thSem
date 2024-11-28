"use client"

import { BarChart } from "@/components/chartUi/BarChartComponent"

const chartdata = [
    {
      "branch": "CSE",
      "averagePackage": 850000,
      "percentagePlaced": 85
    },
    {
      "branch": "IT",
      "averagePackage": 800000,
      "percentagePlaced": 88
    },
    {
      "branch": "ME",
      "averagePackage": 600000,
      "percentagePlaced": 75
    },
    {
      "branch": "EE",
      "averagePackage": 550000,
      "percentagePlaced": 70
    },
    {
      "branch": "ECE",
      "averagePackage": 620000,
      "percentagePlaced": 80
    },
    {
      "branch": "CE",
      "averagePackage": 500000,
      "percentagePlaced": 65
    },
    {
      "branch": "ChE",
      "averagePackage": 580000,
      "percentagePlaced": 68
    },
    {
      "branch": "IE",
      "averagePackage": 610000,
      "percentagePlaced": 72
    },
    {
      "branch": "IndE",
      "averagePackage": 570000,
      "percentagePlaced": 74
    }
  ]
  
  

export const LastYearPlacementBarGraph = () => (
  <BarChart
    className="h-[60vh] w-full p-4"
    data={chartdata}
    index="branch"
    categories={["averagePackage", "percentagePlaced"]}
    valueFormatter={(number: number) =>
      `${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
)