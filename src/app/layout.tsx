import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "X. 무슨 일이 일어나고 있나요? / X",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
