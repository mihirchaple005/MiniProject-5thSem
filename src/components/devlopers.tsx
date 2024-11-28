"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import dev from "@/assets/dev.png";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: dev,  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: dev,  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: dev,  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: dev,  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: dev,  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: dev,
  },
];


function Devlopers() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-20">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Devlopers;
