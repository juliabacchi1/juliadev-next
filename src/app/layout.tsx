import "./globals.css";
import { Gloock, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

export const metadata: Metadata = {
  title: "Juliadev",
  description: "Juliadev next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${gloock.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
