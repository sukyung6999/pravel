import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import localFont from 'next/font/local';

import ReactQueryProviders from '../provider/ReactQueryProviders';

// eslint-disable-next-line import/first
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';
import '../styles/icons.css';
import '../styles/swiper.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const rajdhani = Rajdhani({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: "P'ravel",
  description: "'P'(Mbti) 성향의 즉흥적인 여행자들을 위한 여행 플랫폼",
  viewport:
    'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${rajdhani.variable} font-pretendard`}
      >
        <div className="relative max-w-[780px] min-w-[390px] margin_center">
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </div>
        <div id="modal"></div>
        <ToastContainer />
      </body>
    </html>
  );
}
