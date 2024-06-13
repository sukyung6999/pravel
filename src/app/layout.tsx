import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./_styles/global.css";
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
        <div className="max-w-[780px] min-w-[390px] margin_center">
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </div>
        <div id="modal" className="absolute w-full h-[100vh]"></div>
      </body>
    </html>
  );
}
