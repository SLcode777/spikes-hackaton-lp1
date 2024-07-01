"use client";

import { React } from "react";
import Image from "next/image";
import { Inter, Dela_Gothic_One, DM_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const StackedCards = () => {
  const cards = [1, 2, 3, 4];

  const initialWidth = 780; // Largeur initiale de la première carte
  const decrement = 20; // Décrément de largeur par index

  return (
    <>
      <div className="relative w-full mt-24 h-64 flex justify-center  items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-[820px] h-72 bg-white border border-black/50 rounded-xl`}
            style={{
              top: `${index * -25}px`,
              opacity: 1 - index * 0.15,
              zIndex: -index,
              width: `${initialWidth - index * decrement}px`,
            }}
          >
            {index === 0 && (
              <div
                id="CARD-CONTAINER"
                className="overflow-x-auto scrollbar-hide flex flex-row gap-8 pl-8 py-12 bg-gradient-to-r from-[#314EE7] to-[#FE9C9C] rounded-xl h-full"
              >
                <div
                  id="CARD-1"
                  className="h-full w-72 flex-shrink-0 rounded-xl bg-white"
                >
                  <h1
                    className={` px-4 mt-4  tracking-tight text-md font-medium ${inter.className}`}
                  >
                    Manage your store
                  </h1>
                  <div className="flex flex-row justify-between px-4 py-2">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        alt="bag-icon"
                        src={"/bag-icon.svg"}
                        width={50}
                        height={50}
                      />
                      <Image
                        alt="text-placeholder"
                        src={"/text-placeholder.png"}
                        width={123}
                        height={34}
                      />
                    </div>
                    <Image
                      alt="circle"
                      src={"/circle1.png"}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-row justify-between px-4 py-2">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        alt="cart-icon"
                        src={"/cart-icon.svg"}
                        width={50}
                        height={50}
                      />
                      <Image
                        alt="text-placeholder"
                        src={"/text-placeholder.png"}
                        width={123}
                        height={34}
                      />
                    </div>
                    <Image
                      alt="circle"
                      src={"/circle2.png"}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div
                  id="CARD-2"
                  className="h-full w-72 flex-shrink-0 rounded-xl flex-col bg-white "
                >
                  <div className="flex flex-row justify-between p-4 mb-6">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        alt="bag-icon"
                        src={"/bag-icon.svg"}
                        width={50}
                        height={50}
                      />
                      <Image
                        alt="text-placeholder"
                        src={"/text-placeholder.png"}
                        width={123}
                        height={34}
                      />
                    </div>
                    <div className="flex flex-row items-center">
                      <div className=" items-center flex flex-row gap-2 ">
                        <div className="font-extrabold text-2xl">27k</div>
                        <Image
                          alt="green-triangle"
                          src={"/green-triangle.png"}
                          width={10}
                          height={25}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center px-4 py-2">
                    <Image
                      alt="avatars"
                      src={"/avatar-circles2.svg"}
                      width={250}
                      height={40}
                    />
                  </div>
                </div>
                <div
                  id="CARD-3"
                  className="h-full w-72 flex-shrink-0 rounded-xl flex-col bg-white "
                >
                  <div className="flex flex-row justify-between p-4 ">
                    <div className="flex flex-row items-center gap-2">
                      <div className="font-extrabold text-4xl">$ 7,283k</div>
                      <Image
                        alt="green-triangle"
                        src={"/green-triangle.png"}
                        width={10}
                        height={25}
                      />
                    </div>
                    <div className="ml-7">

                    <Image
                        alt="box-10"
                        src={"/rectangle10.svg"}
                        width={64}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="font-extrabold text-2xl items-center flex flex-row gap-2 "></div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-left px-4 py-2">
                    <Image
                      alt="vector"
                      src={"/vector.svg"}
                      width={270}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default StackedCards;
