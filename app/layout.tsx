import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev.folio — Full Stack Developer",
  description: "Portfolio profesional — diseño, desarrollo y experiencias digitales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#0a0a0a] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
