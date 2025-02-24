import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import type { Metadata, Viewport } from 'next';
import { Rajdhani } from 'next/font/google';
import localFont from 'next/font/local';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import Gnb from '@/layout/navigation/Gnb';

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
  icons: {
    icon: '/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${pretendard.variable} ${rajdhani.variable} font-pretendard`}
      >
        <div className="relative max_min_width margin_center">
          <Suspense fallback={<LoadingSpinner />}>
            <ReactQueryProviders>{children}</ReactQueryProviders>
          </Suspense>
          <Gnb />
        </div>
        <div id="modal" className="relative z-10 bg-white"></div>
        <ToastContainer />
      </body>
    </html>
  );
}
