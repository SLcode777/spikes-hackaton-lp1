import { Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export const NewsletterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-[820px] w-full bg-white rounded-xl px-8 py-12  ">
        <h1 className={`font-bold text-3xl ${dela.className}`}>
        Be the first to know about new features, <br/>special offers, and more.
        </h1>
        <div className="flex flex-col gap-10 z-10">
        <div className="flex flex-row items-center justify-center mt-8 gap-2 z-10">
          <input
            type="email"
            
            placeholder="your best email address"
            className="px-4 py-4 w-72 rounded-lg bg-[#F7F7F7]"
          />
          <button
            type="submit"
            className="px-4 py-4 rounded-lg bg-[#314ee7] hover:bg-[#e291a7] z-10 text-white font-medium w-36"
          >
            Join Waitlist
          </button>
        </div>

        </div>
     
      </div>

      
    </div>
  );
};
