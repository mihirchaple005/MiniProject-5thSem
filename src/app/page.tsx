import Image from "next/image";
import LandingPage from "./dashboard/landingPage";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      
      <LandingPage />
      
        
    </div>
  );
}
