import { div } from "framer-motion/client";
import Image from "next/image";
import { AreaChartHero } from "./AreaChartHero";
import { BarChartHero } from "./HeighestPlacedStuBarGraph";

export default function Home() {
  return (
    <div>
        <AreaChartHero />
        <BarChartHero />
    </div>
  );
}
