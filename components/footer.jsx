import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  return (

    <div className="flex flex-col items-center justify-center gap-4 z-10">

      <div className="flex flex-row max-w-[820px] w-full justify-between self-center my-32">





        <div className="flex flex-row  justify-center items-center gap-2">
          <Image
            src="./logo-sell-black.svg"
            alt="logo"
            width={20}
            height={20}
          />
          <div className="font-bold text-xl">Sell</div>
        </div>




          <div
            className={`flex flex-row justify-center items-center  gap-6 ${inter.className}`}
          >
            <a className="font-bold tracking-tighter" href="http://">
              Home
            </a>
            <a className="font-bold tracking-tighter" href="http://">
              Agencies
            </a>
            <a className="font-bold tracking-tighter" href="http://">
              About
            </a>
            <a className="font-bold tracking-tighter" href="http://">
              My Shortlist
            </a>
          </div>






    </div>

    </div>
  );
};
