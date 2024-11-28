"use client"

import { AreaChart } from "@/components/chartUi/AreaChartComponent"

const chartdata = [
  {
    "company": "XORIANT",
    "year": 2018,
    "Salary": 657673
  },
  {
    "company": "XORIANT",
    "year": 2018,
    "Salary": 657673
  },
  {
    "company": "XORIANT",
    "year": 2018,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2018,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2018,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2018,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2018,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2016,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2015,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2015,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2015,
    "Salary": 446973
  },
  {
    "company": "QUINNOX",
    "year": 2018,
    "Salary": 788735
  },
  {
    "company": "INDUS VALLEY PARTNERS",
    "year": 2018,
    "Salary": 788735
  },
  {
    "company": "INDUS VALLEY PARTNERS",
    "year": 2015,
    "Salary": 788735
  },
  {
    "company": "INDUS VALLEY PARTNERS",
    "year": 2017,
    "Salary": 788735
  },
  {
    "company": "INDUS VALLEY PARTNERS",
    "year": 2017,
    "Salary": 788735
  },
  {
    "company": "INDUS VALLEY PARTNERS",
    "year": 2018,
    "Salary": 29996
  },
  {
    "company": "IGATE",
    "year": 2018,
    "Salary": 29996
  },
  {
    "company": "IGATE",
    "year": 2018,
    "Salary": 29996
  }
]



export const AreaChartHero = () => (
  <AreaChart
    className="h-[60vh] w-full p-4"  
    data={chartdata}
    index="year"
    categories={["company",  "Salary"]}
    valueFormatter={(number: number) =>
      `$${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
 ) 