import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P'ravel",
  description: "'P'(Mbti) 성향의 즉흥적인 여행자들을 위한 여행 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>헤더</header>
        {children}
        <footer>푸터</footer>
      </body>
    </html>
  );
}
