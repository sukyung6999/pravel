import Gnb from '@/layout/navigation/Gnb';

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {modal}
      <Gnb />
    </>
  );
}
