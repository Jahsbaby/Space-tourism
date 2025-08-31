import type { Metadata } from "next";
import { Barlow, Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--text-2",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Next js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className}`}>
        <main className="relative flex flex-col justify-between text-slate-200">
          <div>
            <Navbar />
          </div>

          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
