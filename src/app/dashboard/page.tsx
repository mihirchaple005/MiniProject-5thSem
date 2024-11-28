import Image from "next/image";
import PlacementAnalysis from "@/components/placementAnalysis";
import Companies from "@/components/companyRecomendation";
import Posts from "@/components/posts"; 
import Herosection  from "@/components/herosection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Herosection />
      <PlacementAnalysis />
      <Companies />
      <Posts />
      <Footer />
    </div>
  );
}
