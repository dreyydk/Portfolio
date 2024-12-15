import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Andrei Bacin | Desenvolvedor Fullstack",
  description:
    "Meu nome é Andrei, sou um desenvolvedor fullstack de 21 anos, especializado em construir soluções de software modernas e eficientes. Posso criar desde landing pages para o seu produto digital até sistemas completos que potencializam o seu negócio. Entre em contato e vamos criar algo incrível juntos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "antialised bg-gray-900 font-sans text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
