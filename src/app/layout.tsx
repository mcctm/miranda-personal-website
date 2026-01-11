import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EB_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "Miranda Chan",
  description: "Miranda's personal website",
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable}`}>
      <head />
      <body>
        <div className="h-screen overflow-hidden">
          <Header />
          <main className="pt-32 flex justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
