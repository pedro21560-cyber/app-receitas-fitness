import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/custom/bottom-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitChef - Seu App de Receitas Fitness",
  description: "Receitas saudáveis, comunidade fitness e IA para criar receitas personalizadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main className="pb-20 min-h-screen bg-gray-50">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
