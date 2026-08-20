import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import DemoBar from "@/components/DemoBar";
import { DemoProvider } from "@/components/DemoState";

const display = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Architect Consultium",
  description:
    "Olabanji Afolabi, The Leadership Architect. Books, writing and leadership programmes in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full">
        <DemoProvider>
          {children}
          <DemoBar />
        </DemoProvider>
      </body>
    </html>
  );
}
