import { Inter, Dela_Gothic_One, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dela = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
const dm = DM_Sans({ subsets: ["latin"] });

export const fonts = { inter, dela, dm };

export const metadata = {
  title: "Spikes Hackaton LP",
  description: "Spikes Hackaton LP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
