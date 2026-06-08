import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashoka-games-studio.vercel.app"),
  title: {
    default: "Ashoka Games | HTML5 & Mobile Game Studio",
    template: "%s | Ashoka Games",
  },
  description:
    "Ashoka Games builds addictive HTML5 and mobile games with reskinning, SDK integrations, monetization support, and freelance development services.",
  keywords: [
    "Ashoka Games",
    "HTML5 games",
    "Game development",
    "Construct 3",
    "Phaser",
    "Game reskinning",
    "SDK integration",
  ],
  openGraph: {
    title: "Ashoka Games",
    description:
      "We build addictive HTML5 & mobile games for clients and players worldwide.",
    url: "https://ashoka-games-studio.vercel.app",
    siteName: "Ashoka Games",
    type: "website",
  },
  verification: {
    google: "n4FvtLUVkQ69pP1wXCBx-LAue_3mmbKvFN_PUSc9TaU", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
