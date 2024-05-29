import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./reset.css";
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

// const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${pretendard.variable} font-pretendard`}>
        <header>헤더</header>
        <main>{children}</main>
        <footer>푸터</footer>
      </body>
    </html>
  );
}
