"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser} from "@tabler/icons-react";



function herosection() {

    const navItems = [
        {
          name: "CampusConnect",
          link: "/",
          icon: <IconHome className="h-full w-full text-neutral-500 dark:text-white" />,
        },
        {
          name: "Jobs",
          link: "/jobs-available",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Community",
          link: "/community/users",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "profile",
          link: "/profile",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];


  return (


    <div className="relative  w-full">
      
        <FloatingNav navItems={navItems} />
      

     
   

        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-8xl text-xl text-white relative z-20")}>
            CampusConnect
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
        Shape your future by seizing every opportunity today with Campus Connect - where potential meets opportunity.
        </p>
        </div>
    </div>
  )
}

export default herosection

