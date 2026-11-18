import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata = {
  title: "Cinder & Vine | Wood-fired restaurant (demo)",
  description:
    "A wood-fired restaurant in the Old Mill District. A demo site for a fictitious business, built for the MyClickAid gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${instrument.variable} ${hanken.variable}`}>
      <body className='font-body min-h-screen flex flex-col overflow-x-clip'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
