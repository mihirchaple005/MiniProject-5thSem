"use client"

import { DonutChart } from "@/components/chartUi/DonatChartComponent"

const data = [
  {
    "name": "TCS",
    "percentageHired": 35
  },
  {
    "name": "Infosys",
    "percentageHired": 28
  },
  {
    "name": "Wipro",
    "percentageHired": 22
  },
  {
    "name": "Capgemini",
    "percentageHired": 15
  },
  {
    "name": "Cognizant",
    "percentageHired": 10
  },
  {
    "name": "Accenture",
    "percentageHired": 8
  },
  {
    "name": "HCL",
    "percentageHired": 5
  }
]


export const CompanyWisePlacementLastYear = () => (
  <div className="flex flex-row   items-center justify-center gap-4">
    
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-gray-700 dark:text-gray-300"> </p>
      <DonutChart
        data={data}
        variant="pie"
        category="name"
        value="percentageHired"
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}%`
        }
      />
    </div>
  </div>
)