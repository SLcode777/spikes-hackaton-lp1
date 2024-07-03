import { Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export const NewsletterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-8 ">
      <div className="max-w-[820px] w-full bg-white rounded-xl px-8 py-12 z-10 ">
        <h1
          className={`font-bold text-xl md:text-2xl lg:text-3xl ${dela.className}`}
        >
          Be the first to know about new features, <br />
          special offers, and more.
        </h1>
        <div className="flex flex-col gap-10 z-10">
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-6 md:gap-4 z-10">
            <input
              type="email"
              placeholder="your best email address"
              className="px-4 py-4 w-full rounded-lg bg-[#F7F7F7]"
            />
            <button
              type="submit"
              className="px-4 py-4 rounded-lg bg-[#314ee7] hover:bg-[#e291a7] z-10 text-white font-medium w-full md:w-40"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
