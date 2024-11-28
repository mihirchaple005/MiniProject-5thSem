import { div } from "framer-motion/client";
import Image from "next/image";
import JobsCollection from "@/app/jobs-available/jobs-collection";


export default function Home() {
  return (
    <div>
        <JobsCollection />
    </div>
  );
}
