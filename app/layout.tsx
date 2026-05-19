
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le pire site jamais fait pour Kevin",
  description: "Un hommage vibrant à notre ami Kevin. On t'aime, mais on aime encore plus se moquer de toi.",
  keywords: ["Kevin", "blague", "doigt d'honneur", "site troll", "humour"],
  authors: [{ name: "Ton meilleur ami" }],
  openGraph: {
    title: "Le pire site jamais fait pour Kevin",
    description: "Un site rien que pour toi... et pour que tout le monde rigole.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
