import type { Metadata, Viewport } from "next";
import { Cormorant_Upright, Cormorant_Infant, Manrope, Gotu, Aboreto, Yaldevi } from "next/font/google";
import Controls from "@/components/sections/Controls";
import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-upright",
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-infant",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const gotu = Gotu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gotu",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
});

const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-yaldevi",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#45a086",
};

export const metadata: Metadata = {
  title: "Farooq Weds Sanobar",
  description: "Wedding Invitation - Farooq Weds Sanobar",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.variable} ${cormorantInfant.variable} ${manrope.variable} ${gotu.variable} ${aboreto.variable} ${yaldevi.variable}`}
      >
        <div className="texture-overlay" />
        <Controls />
        {children}
      </body>
    </html>
  );
}
