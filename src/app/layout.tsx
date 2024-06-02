import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./_styles/reset.css";
import "./_styles/icons.css";
import ReactQueryProviders from "./_provider/ReactQueryProviders";

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: "P'ravel",
  description: "'P'(Mbti) 성향의 즉흥적인 여행자들을 위한 여행 플랫폼",
  icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <div>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
