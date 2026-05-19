
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Le pire site jamais fait pour Ilem",
  description: "Un hommage vibrant à notre ami Ilem. On t'aime, mais on aime encore plus se moquer de toi.",
  keywords: ["Ilem", "blague", "doigt d'honneur", "site troll", "humour"],
  authors: [{ name: "Ton meilleur ami" }],
  openGraph: {
    title: "Le pire site jamais fait pour Ilem",
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
      <body className="antialiased">
        <div className="grain-overlay" />
        <CustomCursor />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
