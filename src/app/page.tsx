import { BG } from "@/components/homeBG";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <div>
      <BG />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35 }}
        className="w-full xl:flex justify-between items-center h-[80vh] text-white md:mt-44 xl:mt-0"
      >
        <div className="xl:w-1/2 flex flex-col justify-between items-center xl:items-start mb-14 xl:mb-0">
          <h2 className="uppercase text-lg lg:text-sm md:mb-10 mb-4">
            So, you want to travel to
          </h2>

          <h1 className="font-medium text-9xl md:mb-14 mb-2">SPACE</h1>

          <p className="text-lg text-center lg:text-justify tracking-wider font-normal text-slate-400 leading-normal w-[96%]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>

        <div className="xl:w-1/2 flex justify-center md:mt-60 xl:mt-0">
          <div className="w-40 h-40 md:h-52 md:w-52 xl:w-60 xl:h-60 bg-white rounded-full flex items-center justify-center text-black">
            <p className="text-2xl md:text-4xl font-bold tracking-widest">
              EXPLORE
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
