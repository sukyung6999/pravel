import Gnb from '@/layout/navigation/Gnb';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Gnb />
    </>
  );
}
