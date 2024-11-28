import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
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
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-8 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.moreDetailsLink}
          key={item?.moreDetailsLink}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card className="border-4 border-gray-500 rounded-3xl shadow-lg p-4 w-full max-w-md bg-gray-900 transition-transform duration-200 hover:shadow-xl hover:scale-105 h-[31rem]">
  <div className="w-full h-[2rem] mb-2">
    {/* Job Title */}
    <h2 className="font-semibold text-lg text-white">{item.jobTitle}</h2>
  </div>

  {/* Job Image */}
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
      <button type="submit"  className="text-zinc-100 flex justify-center border-2 boder-zinc-100 rounded-3xl p-2 w-full hover:text-white hover:bg-blue-900" >Apply</button>
  </div>
</Card>



        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
