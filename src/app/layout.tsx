// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Монгол-Солонгосын Политехник Коллеж",
  description: "Албан ёсны вэбсайт",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className={`${inter.className} bg-white text-black`}>
        <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
