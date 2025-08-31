"use client";

import React, { useState } from "react";
import Logo from "../../public/shared/logo.svg";
import Image from "next/image";
import HamburgerIcon from "../../public/shared/icon-hamburger.svg";
import Closehamburger from "../../public/shared/icon-close.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center h-32 relative px-14 ">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo of the brand" sizes="40" />
      </Link>

      <nav className="hidden xl:flex items-center gap-x-10 py-4 px-20 backdrop-blur-lg absolute right-0 h-[10vh]">
        {navLink.map((data, idx) => (
          <Link
            href={data.href}
            className={cn(
              `flex space-x-2 items-center text-slate-200 uppercase tracking-widest text-sm h-[10vh] pb-4 ${
                pathname === data.href ? "border-b border-slate-400" : ""
              }`
            )}
            key={idx}
          >
            <span className="">{data.number}</span>
            <span className="text-normal">{data.label}</span>
          </Link>
        ))}
      </nav>

      {/* mobile nav */}
      <div className="xl:hidden ">
        <div className="absolute top-11 right-11 ">
          <div onClick={handleNavBar}>
            {isNavOpen ? (
              <Image src={Closehamburger} alt="Hamburger Icon" />
            ) : (
              <Image src={HamburgerIcon} alt="Hamburger Icon" />
            )}
          </div>

          <nav className="absolute  top-12 right-2 z-20">
            {isNavOpen ? (
              <div className="flex flex-col justify-between gap-y-10 backdrop-blur-lg px-5 py-5 rounded-lg ">
                {navLink.map((data, idx) => (
                  <Link
                    href={data.href}
                    className={cn(
                      `flex space-x-2 items-center text-slate-200 uppercase tracking-widest text-sm  ${
                        pathname === data.href
                          ? "border-b border-slate-400"
                          : ""
                      }`
                    )}
                    key={idx}
                  >
                    <span className="">{data.number}</span>
                    <span className="text-normal">{data.label}</span>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const navLink = [
  {
    number: "00",
    label: "Home",
    href: "/",
  },
  {
    number: "01",
    label: "Destination",
    href: "/destination",
  },
  {
    number: "02",
    label: "Crew",
    href: "/crew",
  },
  {
    number: "03",
    label: "Technology",
    href: "/technology",
  },
];
