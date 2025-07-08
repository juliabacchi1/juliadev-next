import "./globals.css";
import { Gloock, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
  title: "Julia Bacchi | Front-end Developer",
  description:
    "Portfólio de Julia Bacchi - Desenvolvedora front-end com foco em React, Next.js e TailwindCSS.",
  keywords: [
    "desenvolvimento front-end",
    "React",
    "Next.js",
    "Portfolio desenvolvedor",
    "Desenvolvedor front-end",
    "TailwindCSS",
    "portfólio Julia Bacchi",
  ],
  metadataBase: new URL("https://juliabacchi.com"),
  openGraph: {
    title: "Julia Bacchi | Front-end Developer",
    description:
      "Portfólio de Julia Bacchi - Desenvolvedora front-end com foco em React, Next.js e TailwindCSS.",
    url: "https://juliabacchi.com",
    type: "website",
    siteName: "Portfólio Julia Bacchi",
    images: "/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Bacchi | Front-end Developer",
    description:
      "Portfólio de Julia Bacchi - Desenvolvedora front-end com foco em React, Next.js e TailwindCSS.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${gloock.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Título no iOS */}
        <meta name="apple-mobile-web-app-title" content="Julia Dev" />
        <meta name="application-name" content="Julia Dev" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Favicons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        {/* PWA icons - Android */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/favicon-512x512.png"
        />

        {/* Script GA */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            debug_mode: ${process.env.NODE_ENV === "development"}
          });
        `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
