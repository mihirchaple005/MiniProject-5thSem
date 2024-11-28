
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { BarChartHero } from "@/app/charts/HeighestPlacedStuBarGraph";
import { LastYearPlacementBarGraph } from "@/app/charts/LastYearPlacementBarGraph";
import { CompanyWisePlacementLastYear } from "@/app/charts/CompanyWisePlacementLastYear";
import { YearOnYearPlacement } from "@/app/charts/YearOnYearPlacement";




const tabs = [
    {
      title: "Heighest Placement",
      value: "Package",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-violet-200">
          <p className="text-gray-900">Heighest Package</p>
          <BarChartHero />
        </div>
      ),
    },
    {
      title: "Last Year Placement",
      value: "Last Year Placement",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-violet-200">
          <p className="text-gray-900">Last Year Placement</p>
          <LastYearPlacementBarGraph />
        </div>
      ),
    },
    {
      title: "Company Wise Placement",
      value: "Company Wise Placement",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-violet-200">
          <p className="text-gray-900">Company Wise Placement</p>
          <CompanyWisePlacementLastYear />
        </div>
      ),
    },
    {
      title: "Year on Year Placement",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-blue-200">
          <p className="text-gray-900">Year on Year Placement</p>
          <YearOnYearPlacement />
        </div>
      ),
    }
  ];





  




function placementAnalysis() {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-20 ">
      <Tabs tabs={tabs} />
    </div>
  )
}

export default placementAnalysis