import { div } from "framer-motion/client";
import Image from "next/image";
import ApplyPortal from "./StudentJobApplicationForm";
import { useRouter } from 'next/router';


export default function Home() {

  // Access the company from the dynamic route

  return (
    <div>
        <ApplyPortal />
    </div>
  );
}
