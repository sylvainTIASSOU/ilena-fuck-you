import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "ILEM // DOSSIER DE SÉCURITÉ COMPROMIS",
  description: "Système de surveillance Ilem. On t'aime, mais on aime encore plus compiler tes exploits.",
  keywords: ["Ilem", "Cyberpunk", "Site Troll", "Dossier Secret", "Humour", "Shadcn"],
  authors: [{ name: "Cyber Intelligence" }],
  openGraph: {
    title: "ILEM // DOSSIER DE SÉCURITÉ COMPROMIS",
    description: "Accès non autorisé aux archives d'Ilem. Analyse en temps réel.",
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
      <body className="antialiased select-none selection:bg-[#00f0ff]/30 selection:text-[#00f0ff] min-h-screen relative overflow-x-hidden">
        {/* Futuristic Background layers */}
        <div className="cyber-grid" />
        <div className="cyber-glow-cyan" />
        <div className="cyber-glow-pink" />
        <div className="grain-overlay opacity-25" />
        
        {/* Interactive overlays */}
        <CustomCursor />
        <ParticlesBackground />
        
        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
