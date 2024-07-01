import Image from "next/image";
import { Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export const HeroSection = () => {
  return (
    <>
      <section className="absolute inset-0 flex flex-row justify-center items-center z-10">
        <span class="absolute top-10 left-1/4 bg-[#f9cfc7]/85 rounded-full h-1/4 w-1/3 blur-3xl"></span>
        <span class="absolute -top-72 left-1/2 bg-[#add2fc]/75 rounded-full h-1/4 w-1/3 blur-3xl"></span>
        <span class="absolute top-1/4  bg-[#AE92FE]/75 rounded-full h-36 w-96 blur-3xl"></span>
      </section>
      <section className=" z-10 flex flex-col h-full justify-center items-center w ">
        <div className="max-w-[820px] z-10 flex flex-row items-center px-4 justify-between bg-[#282828] mt-10 h-10 w-1/2 text-white rounded-xl">
          <div className="flex flex-row gap-2">
            <Image src="./logo-sell.svg" alt="logo" width={20} height={20} />
            <div>Sell</div>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="./logo-twitter-blue.svg"
              alt="logo"
              width={16}
              height={16}
            ></Image>
            <div className="text-sm">Follow us on Twitter</div>
          </div>
        </div>
        <div className="z-10 my-12">
          <div className=" font-medium rounded-full text-sm py-2 px-4 text-white bg-gradient-to-r from-[#e291a7] to-[#3951e5]">
            Introducing a new online selling platform 🎉
          </div>
        </div>
        <h1
          className={`z-10 text-black text-6xl leading-tight  ${dela.className}`}
        >
          Best way to sell <br />
          your digital product
        </h1>
        <p className="my-8 font-semibold text-xl z-10 text-[#626262]/90">
          Go from Zero to Hero with simple platform that helps <br />
          creators like you sell their digital products online.
        </p>
        <div className="flex flex-row gap-2 z-10">
          <input
            type="email"
            placeholder="your best email address"
            className="px-4 py-4 w-72 rounded-lg"
          />
          <button
            type="submit"
            className="px-4 py-4 rounded-lg bg-[#314ee7] z-10 text-white font-medium w-36"
          >
            Try it out
          </button>
        </div>
        <div className="my-6 gap-2 flex flex-row z-10">
          <Image src="./avatar-circles.svg" alt="logo" width={73} height={25} />
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <div className="font-semibold text-sm">More than 100+</div>
              <div className="font-semibold text-sm text-black/50 ">
                {" "}
                users are selling their products
              </div>
            </div>
            <div className="font-semibold text-xs text-black/50 self-start">
              online with simple & easy ways
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bottom-0 left-0 right-0 top-16 bg-[linear-gradient(to_right,#fef8f6_1px,transparent_1px),linear-gradient(to_bottom,#fef8f6_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_25%_20%_at_50%_0%,#000_20%,transparent_90%)]"></div>
      </section>
    </>
  );
};
