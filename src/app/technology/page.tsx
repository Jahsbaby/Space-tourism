import React from "react";
import TechnologyDesktop from "../../../public/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../../public/technology/background-technology-tablet.jpg";
import Technologymobile from "../../../public/technology/background-technology-mobile.jpg";
import Image from "next/image";
import TechnologyComponent from "@/components/technolgyComponents";
import { technology } from "@/data";
import * as motion from "framer-motion/client";

const Crewpage = () => {
  return (
    <div>
      <TechnologyBG />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36 md:mb-20">
          <span className="text-xl font-extrabold text-gray-500 tracking-widest">
            03
          </span>
          <p className="text-white font-normal text-xl tracking-widest uppercase">
            space launch 101
          </p>
        </div>
        <div>
          <TechnologyComponent data={technology} />
        </div>
      </motion.div>
    </div>
  );
};

export default Crewpage;

const TechnologyBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={Technologymobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={TechnologyTablet}
        alt="homepage background for tablet"
        className="hidden md:block min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={TechnologyDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
