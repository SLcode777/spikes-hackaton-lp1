"use client";

import { React, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ChevronLeft, ChevronRight } from "lucide-react";

const StackedCards = () => {
  const cards = [1, 2, 3, 4];

  const initialWidth = 780; // Largeur initiale de la première carte
  const decrement = 20; // Décrément de largeur par index

  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollBy({left: scrollOffset, behavior: 'smooth'});
  };

  return (
    <>
      <div className="relative  mt-24 h-64 flex justify-center  items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-[820px] h-72 bg-white/50  rounded-xl`}
            style={{
              top: `${index * -15}px`,
              opacity: 1 - index * 0.15,
              zIndex: -index,
              width: `${initialWidth - index * decrement}px`,
            }}
          >
            {index === 0 && (
              <div
                id="CARD-CONTAINER"
                ref={ref}
                className="overflow-x-auto scrollbar-hide flex flex-row gap-8 px-8 py-12 bg-gradient-to-r from-[#314EE7] to-[#FE9C9C] rounded-xl h-full"
              >
                <div
                  className="absolute -left-8 top-32 hover:cursor-pointer hover:-translate-x-1"
                  onClick={() => scroll(-300)}
                >
                  <ChevronLeft />
                </div>
                <div
                  id="CARD-1"
                  className="h-full w-72 flex-shrink-0 rounded-xl bg-white"
                >
                  <h1
                    className={` px-4 mt-4 text-center tracking-tight text-md mb-2 font-semibold ${inter.className}`}
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
                      src={"/Vector.svg"}
                      width={270}
                      height={80}
                    />
                  </div>
                </div>
                <div
                  className="absolute -right-8 top-32 hover:cursor-pointer hover:translate-x-1"
                  onClick={() => scroll(300)}
                >
                  <ChevronRight />
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
