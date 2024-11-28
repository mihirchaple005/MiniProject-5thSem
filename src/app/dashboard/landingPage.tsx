"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import Link from "next/link";




const words = [
  {
    text: "Unlock",
  },
  {
    text: "opportunities",
  },
  {
    text: "with",
  },
  {
    text: "CampusConnect,",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "powered by AI",
    
  },
];




function landingPage() {
  return (

    <>

    <div className="h-[22rem] flex items-center justify-center">
      <TextHoverEffect text="CAMPUS CONNECT" />
    </div>


    <div className="flex flex-col items-center justify-center h-[20rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-2xl  text-orange-500">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-20">
        <Link href={"/dashboard"}>
        
        <button 
        className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>

        </Link>
        
      </div>
    </div>
    </>
  )
}

export default landingPage