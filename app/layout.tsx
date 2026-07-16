import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Honora Cloud Academy — Deviens l'ingénieur Cloud que tu veux être",
  description:
    "Apprends le Cloud Computing avec AWS depuis chez toi. Format flexible, adapté à ton rythme, avec des ingénieurs qualifiés qui ont fait leurs preuves. Bilingue FR / EN, 100% pratique.",
  openGraph: {
    title: "Honora Cloud Academy",
    description:
      "Apprends le Cloud avec AWS depuis chez toi. Format flexible, mentors qualifiés, 100% pratique.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
