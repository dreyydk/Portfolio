import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
