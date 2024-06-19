import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import { PageIdProvider } from "@/contexts/SlugContext";

const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-baskerville' });

export const metadata: Metadata = {
  title: "Galleria",
  description: "Galleria slideshow site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} ${libreBaskerville.variable} min-h-svh overflow-x-hidden`}>
        <PageIdProvider>
          <Header />
          {children}
        </PageIdProvider>
      </body>
    </html>
  );
}
