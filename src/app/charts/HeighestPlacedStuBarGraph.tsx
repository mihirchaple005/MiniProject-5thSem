"use client"

import { BarChart } from "@/components/chartUi/BarChartComponent"

const chartdata = [
    { "year": "2000", "branch": "Civil Engineering", "package": 640000 },
    { "year": "2001", "branch": "Mechanical Engineering", "package": 660000 },
    { "year": "2002", "branch": "Computer Science", "package": 680000 },
    { "year": "2003", "branch": "Electrical Engineering", "package": 700000 },
    { "year": "2004", "branch": "Civil Engineering", "package": 720000 },
    { "year": "2005", "branch": "Mechanical Engineering", "package": 740000 },
    { "year": "2006", "branch": "Computer Science", "package": 760000 },
    { "year": "2007", "branch": "Electrical Engineering", "package": 780000 },
    { "year": "2008", "branch": "Civil Engineering", "package": 800000 },
    { "year": "2009", "branch": "Mechanical Engineering", "package": 820000 },
    { "year": "2010", "branch": "Computer Science", "package": 850000 },
    { "year": "2011", "branch": "Electrical Engineering", "package": 880000 },
    { "year": "2012", "branch": "Civil Engineering", "package": 910000 },
    { "year": "2013", "branch": "Mechanical Engineering", "package": 940000 },
    { "year": "2014", "branch": "Computer Science", "package": 970000 },
    { "year": "2015", "branch": "Electrical Engineering", "package": 1000000 },
    { "year": "2016", "branch": "Civil Engineering", "package": 1050000 },
    { "year": "2017", "branch": "Mechanical Engineering", "package": 1100000 },
    { "year": "2018", "branch": "Computer Science", "package": 1200000 },
    { "year": "2019", "branch": "Electrical Engineering", "package": 1300000 },
    { "year": "2020", "branch": "Civil Engineering", "package": 1600000 },
    { "year": "2021", "branch": "Mechanical Engineering", "package": 2200000 },
    { "year": "2022", "branch": "Computer Science", "package": 4800000 },
    { "year": "2023", "branch": "Electrical Engineering", "package": 5000000 }
  ]
  

export const BarChartHero = () => (
  <BarChart
    className="h-[60vh] w-full p-4"
    data={chartdata}
    index="year"
    categories={["package", "branch"]}
    valueFormatter={(number: number) =>
      `${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
)