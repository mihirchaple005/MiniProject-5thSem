"use client"

import React from "react"

import { ComboChart, type TooltipProps } from "@/components/chartUi/ComboChart"

const data = [
  { date: "Jan 23", SolarPanels: 2890, MoMChange: 0 },
  { date: "Feb 23", SolarPanels: 2756, MoMChange: -4.64 },
  { date: "Mar 23", SolarPanels: 3322, MoMChange: 20.54 },
  { date: "Apr 23", SolarPanels: 3470, MoMChange: 4.46 },
  { date: "May 23", SolarPanels: 3475, MoMChange: 0.14 },
  { date: "Jun 23", SolarPanels: 3129, MoMChange: -9.96 },
  { date: "Jul 23", SolarPanels: 3490, MoMChange: 11.54 },
  { date: "Aug 23", SolarPanels: 2903, MoMChange: -16.82 },
  { date: "Sep 23", SolarPanels: 2643, MoMChange: -8.96 },
  { date: "Oct 23", SolarPanels: 2837, MoMChange: 7.34 },
  { date: "Nov 23", SolarPanels: 2954, MoMChange: 4.12 },
  { date: "Dec 23", SolarPanels: 3239, MoMChange: 9.65 },
]

export const YearOnYearPlacement = () => {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null)

  const currencyFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(number)}`

  const percentageFormatter = (number: number) => `${number.toFixed(2)}%`

  const payload = datas?.payload?.[0]?.payload
  const solarPanelsValue =
    payload?.SolarPanels ?? data[data.length - 1].SolarPanels
  const momChangeValue = payload?.MoMChange ?? data[data.length - 1].MoMChange

  const formattedSolarPanels = currencyFormatter(solarPanelsValue)
  const formattedMoMChange = percentageFormatter(momChangeValue)

  return (
    <div>
      <div className="flex gap-8">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Revenue by month
          </p>

          <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
            {formattedSolarPanels}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            MoM Change:
          </p>
          <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
            {formattedMoMChange}
          </p>
        </div>
      </div>
      <ComboChart
        data={data}
        index="date"
        enableBiaxial={true}
        barSeries={{
          colors: ["amber"],
          categories: ["SolarPanels"],
          valueFormatter: (v) => currencyFormatter(v),
        }}
        lineSeries={{
          colors: ["gray"],
          categories: ["MoMChange"],
          valueFormatter: (v) => percentageFormatter(v),
        }}
        tooltipCallback={(props) => {
          if (props.active) {
            setDatas((prev) => {
              if (prev?.label === props.label) return prev
              return props
            })
          } else {
            setDatas(null)
          }
          return null
        }}
      />
    </div>
  )
}