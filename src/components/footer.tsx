import { div } from "framer-motion/client"
import Devlopers from "./devlopers"

function footer() {
  return (
    <div className="w-full h-[20rem] mt-10">
        <div className="justify-center flex item-center">

            <div className="w-[30rem] h-1 bg-slate-500 rounded-[2rem]">

            </div>

        </div>


        <div className=" text-white ">

            <h2 className="text-2xl font-bold text-center ml-10 mt-10">
                CAMPUS CONNECT
            </h2>

            <h3 className="text-xl font-bold text-center ml-10 mt-10">
                At Campus Connect, we believe that everyone deserves access to the resources they need to succeed in their careers.
            </h3>

            <div>
                <Devlopers />
            </div>

            <h4 className="text-lg font-bold text-center  mt-5">
                © 2024. All rights reserved.
            </h4>

            <h4 className="text-lg font-bold text-center  mt-5">
                Terms of Service | Privacy Policy
            </h4>

        </div>
    </div>
  )
}

export default footer