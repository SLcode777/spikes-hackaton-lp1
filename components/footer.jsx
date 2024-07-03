"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  return (
    <div className="flex flex-col items-center justify-center gap-4 z-10">
      <div className="flex flex-col md:flex-row max-w-[820px] w-full justify-between self-center my-32 gap-4 px-8 md:px-10 lg:px-0 z-10">
        <div className="flex flex-row  justify-center items-center gap-2">
          <Image
            src="./logo-sell-black.svg"
            alt="logo"
            width={20}
            height={20}
          />
          <div onClick={handleScrollToTop} className="font-bold text-xl hover:text-[#314ee7] hover:cursor-pointer">
            Sell
          </div>
        </div>

        <div
          className={`flex flex-row justify-center items-center  gap-6 ${inter.className}`}
        >
          <a
            className="font-bold tracking-tighter hover:text-[#314ee7] hover:cursor-pointer"
            href="http://"
          >
            Home
          </a>
          <a
            className="font-bold tracking-tighter  hover:text-[#8970c7] hover:cursor-pointer"
            href="http://"
          >
            Agencies
          </a>
          <a
            className="font-bold tracking-tighter hover:text-[#c586b0] hover:cursor-pointer"
            href="http://"
          >
            About
          </a>
          <a
            className="font-bold tracking-tighter hover:text-[#fe9c9c] hover:cursor-pointer"
            href="http://"
          >
            My Shortlist
          </a>
        </div>
      </div>
    </div>
  );
};
