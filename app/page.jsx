import { Inter, Dela_Gothic_One, DM_Sans } from "next/font/google";
import StackedCards from "@/components/ui/card-stack";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { NewsletterForm } from "@/components/newsletter-form";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
const dm = DM_Sans({ subsets: ["latin"] });

export const fonts = { inter, dela, dm };

export default function Home() {
  return (
    <main className="mx-auto h-full min-w-screen flex flex-col justify-center text-center relative bg-[#F5F5F5]">
      <HeroSection />
      <section className="my-30 z-10 ">
        <StackedCards />
      </section>
      <section className="mb-40">
        <Features />
      </section>
      <section>
        <NewsletterForm />
      </section>
        <section>
          <Footer />
        </section>
    </main>
  );
}
