"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    jobTitle: string
    image: string
    jobLocation: string
    jobDescription: string
    requiredSkills: string[]
    stipend: string
    moreDetailsLink: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="w-full h-[2rem] mb-2">
    {/* Job Title */}
    <h2 className="font-semibold text-lg text-white">{item.jobTitle}</h2>
  </div>
  {item.image && (
    <div className="w-full h-32 mb-3">
      <img src={item.image} alt={item.jobTitle} className="w-full h-full object-cover rounded-md shadow-sm" />
    </div>
  )}
              <div className="w-full h-[1rem] mb-2">
    {/* Job Location */}
    <p className="text-sm text-gray-400"><strong>Location:</strong> {item.jobLocation}</p>
  </div>

  <div className="w-full h-[5rem] mb-4">
    {/* Job Description */}
    <p className="text-gray-300">{item.jobDescription}</p>
  </div>

  <div className="w-full h-[1rem] my-2">
    {/* Required Skills */}
    <p className="text-sm text-gray-400"><strong>Required Skills:</strong> {item.requiredSkills.join(', ')}</p>
  </div>

  <div className="w-full h-[1rem] my-8">
    {/* Stipend */}
    <p className="text-sm text-gray-400"><strong>Stipend:</strong> {item.stipend}</p>
  </div>

  <div className="w-full h-[1rem] m-1 mb-4">
      <button type="submit" className="text-zinc-100 flex justify-center border-2 boder-zinc-100 rounded-3xl p-2 w-full hover:text-white hover:bg-blue-900" >Apply</button>
  </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
