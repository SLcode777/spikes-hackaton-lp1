import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export const Features = () => {
  return (
    <>
      <section className="max-w-[820px] mx-auto mt-40 flex flex-col items-center z-20">
        <div className="w-full flex flex-rowjustify-between text-start mb-32">
          <h1
            className={`w-full text-6xl font-bold text-black ${dela.className}`}
          >
            Features
          </h1>
          <div className="flex flex-col items-center justify-center ">

          <button className="px-4 py-4 rounded-lg bg-[#314ee7] z-10 text-white font-medium w-36">Try for free</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-20 max-w-1/2 mx-auto justify-between">
          <BackgroundGradient className="rounded-[22px] h-full p-4  bg-white ">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={`/money-icon.svg`}
                alt="money-icon"
                height="100"
                width="100"
                className="object-contain -mt-16"
              />
              <div className="flex flex-col w-full">
                <div className="w-full justify-start text-start items-start font-bold text-xl ">
                  Save time & Reduce cost
                </div>
              </div>
              <div className="w-full justify-start text-start items-start text-[#626262] font-medium text-lg">
                Building your own online store, shopping cart, checkout, and
                licensing is time-consuming{" "}
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] h-full p-4  bg-white ">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={`/mealbox-icon.svg`}
                alt="mealbox-icon"
                height="100"
                width="100"
                className="object-contain -mt-16"
              />
              <div className="flex flex-col w-full">
                <div className="w-full justify-start text-start items-start font-bold text-xl ">
                  More Features
                </div>
              </div>
              <div className="w-full justify-start text-start items-start text-[#626262] font-medium text-lg">
                We simplify all that by combining all of the features and
                solutions you need to sell
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] h-full p-4  bg-white ">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={`/heart-hands-icon.svg`}
                alt="heart-hands-icon"
                height="100"
                width="100"
                className="object-contain -mt-16"
              />
              <div className="flex flex-col w-full">
                <div className="w-full justify-start text-start items-start font-bold text-xl ">
                  Sell your popular product more
                </div>
              </div>
              <div className="w-full justify-start text-start items-start text-[#626262] font-medium text-lg">
                Designed from the ground up to be easy to use and quick to set
                up for sellers{" "}
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] h-full p-4  bg-white ">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={`/wireglobe-icon.svg`}
                alt="wireglobe-icon"
                height="100"
                width="100"
                className="object-contain -mt-16"
              />
              <div className="flex flex-col w-full">
                <div className="w-full justify-start text-start items-start font-bold text-xl ">
                  Sell it across the Globe
                </div>
              </div>
              <div className="w-full justify-start text-start items-start text-[#626262] font-medium text-lg">
                Expand into new global markets with ease when you automatically
                display popular pricing
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </section>
    </>
  );
};
