import Gnb from '@/layout/navigation/Gnb';

export default function RootLayout({
  children,
  energeModal,
  rewardModal,
}: Readonly<{
  children: React.ReactNode;
  energeModal: React.ReactNode;
  rewardModal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {energeModal}
      {rewardModal}
      <Gnb />
    </>
  );
}
