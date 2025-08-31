import Image from "next/image";
import HomeBGDesktop from "../../public/home/background-home-desktop.jpg";
import HomeBGTablet from "../../public/home/background-home-tablet.jpg";
import HomeBGMobile from "../../public/home/background-home-mobile.jpg";

export const BG = () => {
  return (
    <div className="absolute top-0 left-0 w-full -z-20">
      <Image
        src={HomeBGMobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={HomeBGTablet}
        alt="homepage background for tablet"
        className="hidden md:block min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={HomeBGDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
