import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MorphoSocial — Sistem Informasi Sosial Morphogenetic",
  description:
    "Sistem informasi untuk memetakan, menganalisis, dan memahami dinamika struktur sosial menggunakan pendekatan morphogenetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-screen bg-slate-50 font-sans">{children}</body>
    </html>
  );
}
