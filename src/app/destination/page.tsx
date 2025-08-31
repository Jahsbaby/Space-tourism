import React from "react";
import DestinationDesktop from "../../../public/destination/background-destination-desktop.jpg";
import DestinationTablet from "../../../public/destination/background-destination-tablet.jpg";
import DestinationMobile from "../../../public/destination/background-destination-mobile.jpg";
import Image from "next/image";
import { destinations } from "@/data";
import DestinationComponent from "@/components/destinationComponent";
import * as motion from "framer-motion/client";

const DestinationPage = () => {
  return (
    <div>
      <DestinationBG />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36">
          <span className="text-xl font-extrabold text-gray-500 tracking-widest">
            01
          </span>
          <p className="text-white font-normal text-xl tracking-widest uppercase">
            pick your destinaion
          </p>
        </div>

        {/* destinaion */}
        <div className="text-white flex mt-10 ">
          <DestinationComponent data={destinations} />
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationPage;

const DestinationBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={DestinationMobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={DestinationTablet}
        alt="homepage background for tablet"
        className="hidden md:block min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={DestinationDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
