import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import DemoBar from "@/components/DemoBar";
import { DemoProvider } from "@/components/DemoState";

/* One display family doing two jobs: 400 carries the section and page
   headings, 900 carries the poster words on the stage. The optical size axis
   is what stops the heavy cut going spindly once it is 170px tall. */
const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
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
