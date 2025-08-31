import React from "react";
import CrewDesktop from "../../../public/crew/background-crew-desktop.jpg";
import CrewTablet from "../../../public/crew/background-crew-tablet.jpg";
import CrewMobile from "../../../public/crew/background-crew-mobile.jpg";
import Image from "next/image";
import CrewComponent from "@/components/crewComponents";
import { crew } from "@/data";
import * as motion from "framer-motion/client";

const Crewpage = () => {
  return (
    <div>
      <CrewBG />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36 mb-4 xl:mb-0">
          <span className="text-xl font-extrabold text-gray-500 tracking-widest">
            02
          </span>
          <p className="text-white font-normal text-xl tracking-widest uppercase">
            meet your crew
          </p>
        </div>

        <div className="">
          <CrewComponent data={crew} />
        </div>
      </motion.div>
    </div>
  );
};

export default Crewpage;

const CrewBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={CrewMobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={CrewTablet}
        alt="homepage background for tablet"
        className="hidden md:block min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={CrewDesktop}
        alt="homepage background"
        className="hidden min-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
