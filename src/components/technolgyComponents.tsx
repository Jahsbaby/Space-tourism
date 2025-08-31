"use client";

import { TechnologyProp } from "@/types/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";
import * as motion from "framer-motion/client";

interface TechnologyComponentProp {
  data: TechnologyProp[];
}

const TechnologyComponent: React.FC<TechnologyComponentProp> = ({ data }) => {
  const [currentTabs, setCurrentTabs] = useState(0);

  return (
    <div>
      <div className="xl:flex xl:justify-between items-center gap-x-10">
        <div className="flex xl:flex-col justify-center xl:gap-y-10 gap-x-10 mt-5  mb-5 md:mb-10 xl:mb-0 md:mt-0">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTabs(idx)}
              className={cn(
                `w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full bg-black text-white border tect-2xl hover:bg-white hover:text-black flex items-center justify-center ${
                  currentTabs === idx ? "bg-white text-black" : ""
                }`
              )}
            >
              {idx}
            </button>
          ))}
        </div>

        <div>
          {data.map((data, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentTabs === idx ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              key={idx}
              className={cn(` ${currentTabs === idx ? "" : "hidden"}`)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.35 }}
                className="xl:flex gap-x-10 w-full items-center justify-between"
              >
                <div className="xl:w-[60%] mb-10 xl:mb-0 text-center xl:text-left">
                  <h2 className="uppercase tracking-wide font-normal mb-2">
                    the terminology
                  </h2>
                  <p className="text-3xl xl:text-7xl uppercase tracking-widest mb-2 md:mb-10">
                    {data.name}
                  </p>
                  <p className="xl:w-[80%] text-base tracking-wide leading-loose">
                    {data?.description}
                  </p>
                </div>

                <div className="xl:w-[40%] flex justify-center items-center ">
                  <Image
                    src={data?.images.portrait}
                    alt="technolgy image"
                    className="hidden xl:block object-contain"
                  />

                  <Image
                    src={data?.images.landscape}
                    alt="technolgy image"
                    className="xl:hidden object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyComponent;
